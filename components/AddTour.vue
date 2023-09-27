<template>
  <form class="shadow-md transition duration-200 overflow-hidden h-full mb-6">
    <div>
      <!-- image 1 -->
      <div class="w-full h-full flex justify-between flex-col">
        <p class="text-center">
          {{ fileText }}
        </p>

        <label for="file">Vælg et cover billede:</label>
        <input
          type="file"
          name="image"
          class="mr-3 p-3"
          id="image"
          @change="fileChange($event, 1)"
        />
      </div>
      <!-- image 2-->
      <div class="w-full h-full flex justify-between flex-col">
        <p class="text-center">
          {{ fileText }}
        </p>

        <label for="file">Vælg et ekstra billede:</label>
        <input
          type="file"
          name="image"
          class="mr-3 p-3"
          id="image"
          @change="fileChange($event, 2)"
        />
      </div>
    </div>

    <div class="p-6">
      <!-- title -->
      <input
        type="text"
        required
        v-model="postTitle"
        class="p-3 placeholder:text-black border-none text-2xl bg-LightGrey w-full mb-3"
        placeholder="Title"
      />

      <!-- content -->
      <Quill
        placeholder="Nyheds tekst"
        @contentChange="setContent($event)"
      ></Quill>

      <div class="flex flex-col gap-3">
        <label for="traveltime">Angiv rejsetid:</label>
        <input
          type="text"
          name="traveltime"
          v-model="postTraveltime"
          placeholder=" ca. 45 timer"
          class="p-3 placeholder:text-black border-none bg-LightGrey w-full mb-3"
        />

        <label for="destination">Angiv destination:</label>
        <input
          type="text"
          name="destionation"
          required
          v-model="postDestination"
          placeholder="Månen"
          class="p-3 placeholder:text-black border-none bg-LightGrey w-full mb-3"
        />

        <label for="distance">Angiv afstand:</label>
        <input
          type="text"
          name="distance"
          required
          v-model="postDistance"
          placeholder="75 millioner km."
          class="p-3 placeholder:text-black border-none bg-LightGrey w-full mb-3"
        />

        <label for="price">Angiv pris:</label>
        <input
          type="text"
          name="price"
          required
          v-model="postPrice"
          placeholder=" 3 mio."
          class="p-3 placeholder:text-black border-none bg-LightGrey w-full mb-3"
        />

        <label for="spacelaunch">Angiv afrejse dato:</label>
        <input
          type="date"
          name="spacelaunch"
          required
          v-model="postSpacelaunch"
          @input="setDate"
          class="p-3 placeholder:text-black border-none bg-LightGrey w-full mb-3"
        />
      </div>

      <button
        type="submit"
        class="bg-Aqua text-white p-3 w-full mb-3 mt-6 hover:bg-DarkBlue"
        @click="handleSubmit"
      >
        Tilføj ny tur
      </button>
    </div>
  </form>
</template>

<script setup>
const content = ref("");
const emit = defineEmits(["message", "closeModal"]);

/* modtager den nye text fra quill */
function setContent(quillContent) {
  content.value = quillContent;
}

const image1 = ref(null);
const image2 = ref(null);
const fileText = ref("");

const postTitle = ref("");
const postTraveltime = ref("");
const postDestination = ref("");
const postDistance = ref("");
const postPrice = ref("");
const postSpacelaunch = ref("");

function fileChange(event, num) {
  const fileData = event.target;
  if (fileData.files && fileData.files.length > 0) {
    if (num === 1) {
      image1.value = fileData.files[0];
    } else {
      image2.value = fileData.files[0];
    }
  }
}

const handleSubmit = async () => {
  const formData = new FormData();
  if (content.value !== "") {
    if (image1.value) {
      formData.append("title", postTitle.value);
      formData.append("content", content.value);
      formData.append("traveltime", postTraveltime.value);
      formData.append("destination", postDestination.value);
      formData.append("distance", postDistance.value);
      formData.append("price", postPrice.value);
      formData.append("spacelaunch", postSpacelaunch.value);
      formData.append("image1", image1.value);
      formData.append("image2", image2.value);

      const { data: responseData, error } = await useFetch(
        "http://localhost:4444/tours/admin",
        {
          method: "post",
          body: formData,
        }
      );
      if (error) {
        setMessage(error + " tjek at alle felter er udfyldt korrekt");
      } else if (responseData) {
        close();
        setMessage(postTitle.value);
      }
    } else {
      fileText.value = "Indsæt et billede for at oprette nyhed";
    }
  } else {
    setMessage("udfyld text for at oprette en tur");
  }
};

function setMessage(title) {
  emit("message", title);
}

function closeModal() {
  emit("closeModal");
}
</script>
