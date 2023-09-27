<template>
  <div>
    <h2 class="text-2xl font-bold">Rumfærgen</h2>

    <form class="container max-w-6xl mx-auto">
      <section class="flex gap-20 py-20">
        <div class="w-1/2 h-full">
          <img
            :src="`http://localhost:4444/images/spacecraft/${about.image}`"
            alt="om os- billede af jordkloden genne vinduet på en space-shuttle"
            class="w-full h-full object-cover"
          />
          <p class="text-center text-red-500">
            {{ fileText }}
          </p>
          <p>Vælg et nyt billede der overskriver det nuværende</p>
          <input
            type="file"
            name="image"
            class="mr-3 p-3"
            id="image"
            @change="fileChange"
          />

          <button
            class="bg-Aqua py-3 w-full text-white hover:bg-DarkBlue"
            @click.prevent="handleSubmit"
          >
            Ret
          </button>
        </div>

        <div class="w-1/2 flex flex-col justify-between">
          <div>
            <h3 class="text-5xl text-gray-200 font-extralight">
              Hvorfor vælge os
            </h3>
            <div class="mt-6 border-b-2 border-r-gray-400 w-full block mb-6">
              <label for="title" class="text-gray-300">Title:</label>
              <input
                type="text"
                name="title"
                v-model="title"
                class="uppercase -mb-[2px] pb-2 text-Aqua border-b-4 border-b-Aqua inline-block font-light bg-LightGrey placeholder:text-Aqua w-full"
              />
            </div>
            <!-- content -->
            <Quill
              :putText="content"
              placeholder="tekst om rumfærgen"
              @contentChange="setContent($event)"
            ></Quill>
          </div>
        </div>
      </section>
    </form>

    <!-- respons message -->
    <RespondMsg :msg="msg" :displayRes="postMessageActive" />
  </div>
</template>

<script setup>
//fetch rumfærgen content
const { data: about } = await useFetch("http://localhost:4444/spacecraft");

const msg = ref("");
const postMessageActive = ref(false);
const title = ref(about.value.title);
/* POST */

const content = ref(about.value.content);
/* modtager den nye text fra quill */
function setContent(quillContent) {
  content.value = quillContent;
}

const image1 = ref(about.value.image);
const fileText = ref("");

function fileChange(event) {
  const fileData = event.target;
  if (fileData.files) {
    image1.value = fileData.files[0];
  }
}

const handleSubmit = async () => {
  const formData = new FormData();

  formData.append("title", title.value);
  formData.append("content", content.value);
  formData.append("image", image1.value);

  const { data: responseData } = await useFetch(
    "http://localhost:4444/spacecraft/admin",
    {
      method: "put",
      body: formData,
    }
  );
  if (responseData) {
    setMessage("Rumfærgen er nu rettet.");
  }
};

/* POST respond message */
function setMessage(event) {
  msg.value = event;
  postMessageActive.value = true;
  setInterval(() => {
    postMessageActive.value = false;
  }, 6000);
}
</script>
