<template>
  <div
    class="bg-[#34374299] w-full h-full p-12 fixed m-auto top-0 left-0 backdrop-blur-md"
  >
    <div
      class="shadow-md transition duration-200 hover:shadow-xl mb-6 mt-20 bg-white max-w-6xl mx-auto my-20"
    >
      <!-- close btn -->
      <div
        @click="closeModal"
        class="py-2 px-3 border-black border-2 w-fit float-right m-6"
      >
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </div>

      <div class="flex p-12">
        <!-- images  -->
        <div class="p-3 w-1/3">
          <p>Cover billede</p>
          <div class="flex justify-between flex-col m-6">
            <div class="flex items-center rounded-t-lg overflow-hidden h-full">
              <img
                class="object-cover w-full h-full"
                :src="`http://localhost:4444/images/tours/${id.image1}`"
                alt=""
              />
            </div>
            <p class="text-center">{{ fileText }}</p>

            <p>Vælg et nyt billede der overskriver det nuværende</p>
            <input
              type="file"
              name="image"
              class="mr-3 p-3"
              id="image"
              @change="fileChange($event, 1)"
            />
          </div>

          <div class="flex justify-between flex-col m-6">
            <div class="flex items-center rounded-t-lg overflow-hidden h-full">
              <img
                class="object-cover w-full h-full"
                :src="`http://localhost:4444/images/tours/${id.image2}`"
                alt=""
              />
            </div>
            <p class="text-center">
              {{ fileText }}
            </p>

            <p>Vælg et nyt billede der overskriver det nuværende</p>
            <input
              type="file"
              name="image"
              class="mr-3 p-3"
              id="image"
              @change="fileChange($event, 2)"
            />
          </div>
        </div>
        <!-- content -->
        <div class="p-6 w-full">
          <!-- title -->
          <label for="title">Ret title:</label>
          <input
            name="title"
            type="text"
            required
            v-model="postTitle"
            class="p-3 placeholder:text-black border-none text-2xl bg-LightGrey w-full mb-3"
            :placeholder="id.title"
          />

          <!-- content -->
          <Quill
            :putText="id.content"
            placeholder="Nyheds tekst"
            @contentChange="setContent($event)"
          ></Quill>

          <div class="flex flex-col gap-3">
            <label for="traveltime">Angiv rejsetid:</label>
            <input
              type="text"
              name="traveltime"
              v-model="postTraveltime"
              :placeholder="id.traveltime"
              class="p-3 placeholder:text-black border-none bg-LightGrey w-full mb-3"
            />

            <label for="destination">Angiv destination:</label>
            <input
              type="text"
              name="destionation"
              v-model="postDestination"
              :placeholder="id.destination"
              class="p-3 placeholder:text-black border-none bg-LightGrey w-full mb-3"
            />

            <label for="distance">Angiv afstand:</label>
            <input
              type="text"
              name="distance"
              v-model="postDistance"
              :placeholder="id.distance"
              class="p-3 placeholder:text-black border-none bg-LightGrey w-full mb-3"
            />

            <label for="price">Angiv pris:</label>
            <input
              type="text"
              name="price"
              v-model="postPrice"
              :placeholder="id.price"
              class="p-3 placeholder:text-black border-none bg-LightGrey w-full mb-3"
            />

            <label for="spacelaunch">Angiv afrejse dato:</label>
            <input
              type="date"
              name="spacelaunch"
              v-model="postSpacelaunch"
              class="p-3 placeholder:text-black border-none bg-LightGrey w-full mb-3"
            />
          </div>

          <button
            class="bg-Aqua text-white p-3 w-full mb-3 hover:bg-DarkBlue mt-6"
            @click="handleSubmit"
          >
            Ret
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Object,
    default: "id",
  },
});

const emit = defineEmits(["close", "setEditMsg"]);

function closeModal() {
  emit("close");
}

/* POST */

const content = ref(props.id.content);
/* modtager den nye text fra quill */
function setContent(quillContent) {
  content.value = quillContent;
}

const image1 = ref(props.id.image1);
const image2 = ref(props.id.image2);
const fileText = ref("");

const postTitle = ref(props.id.title);
const postTraveltime = ref(props.id.traveltime);
const postDestination = ref(props.id.destination);
const postDistance = ref(props.id.distance);
const postPrice = ref(props.id.price);
const postSpacelaunch = ref(props.id.spacelaunch);

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

  formData.append("title", postTitle.value);
  formData.append("content", content.value);
  formData.append("traveltime", postTraveltime.value);
  formData.append("destination", postDestination.value);
  formData.append("distance", postDistance.value);
  formData.append("price", postPrice.value);
  formData.append("spacelaunch", postSpacelaunch.value);

  formData.append("image1", image1.value);
  formData.append("image2", image2.value);

  const { data: responseData } = await useFetch(
    `http://localhost:4444/tours/admin/${props.id._id}`,
    {
      method: "put",
      body: formData,
    }
  );
  if (responseData) {
    setEditMsg(props.id.title + " er nu rettet");
    closeModal();
  }
};

function setEditMsg(title) {
  emit("setEditMsg", title);
}

onMounted(() => {
  if (postSpacelaunch.value) {
    const originalDate = new Date(postSpacelaunch.value);
    const year = originalDate.getFullYear();
    const month = String(originalDate.getMonth() + 1).padStart(2, "0"); // Add 1 to month as it's zero-based
    const day = String(originalDate.getDate()).padStart(2, "0");

    postSpacelaunch.value = `${year}-${month}-${day}`;
    console.log(postSpacelaunch.value);
  }
});
</script>
