<template>
  <div>
    <h2 class="text-2xl font-bold">Ture</h2>

    <!-- add new tour -->
    <div class="mt-6">
      <button
        @click="addTour = !addTour"
        class="bg-Aqua text-white py-6 px-12 mb-12"
      >
        Tilføj ny tour
      </button>

      <AddTour
        v-if="addTour"
        @message="setMessage($event)"
        @closeModal="closeAdd"
      />
    </div>

    <!-- Edit modal -->
    <div v-if="edit" :data="modalData" class="absolute z-50">
      <Edit
        @close="closeModal"
        @setEditMsg="setMessage($event)"
        :id="modalId"
      />
    </div>

    <!-- existing tour - with delete -->
    <div>
      <div v-for="(tour, index) in tours">
        <!-- put modal -->

        <div>
          <button
            @click="handleDelete(tour._id, tour.title)"
            class="hover:text-red-800 px-2 pt-2"
          >
            <font-awesome-icon icon="fa-solid fa-trash" />
          </button>

          <button
            class="hover:text-yellow-600 px-2 pt-2"
            @click="openModal(item, tour)"
          >
            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          </button>
        </div>
        <Tur :turInfo="tour" />
      </div>
    </div>

    <!-- respons message -->
    <div
      class="bg-Aqua p-3 h-52 w-80 fixed bottom-6 z-50 right-6"
      v-if="postMessageActive"
    >
      <div
        class="float-right cursor-pointer border-black border-2 py-1 px-2 hover:text-white hover:border-white"
        @click="postMessageActive = !postMessageActive"
      >
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </div>
      <div class="flex justify-center items-center h-full">
        <p class="text-center my-auto text-white">
          {{ msg }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { faL } from "@fortawesome/free-solid-svg-icons";

const msg = ref("");
const addTour = ref(false);
const postMessageActive = ref(false);
const edit = ref(false);
const modalData = ref(null);
const modalId = ref("");

//fetch tours
const { data: tours } = await useFetch("http://localhost:4444/tours", {
  watch: [msg],
});

/* modal */
function openModal(data, id) {
  modalData.value = data;
  edit.value = true;
  modalId.value = id;
}

function closeModal() {
  edit.value = false;
}

function closeAdd() {
  addTour.value = false;
}

/* POST */
function setMessage(event) {
  msg.value = event;
  postMessageActive.value = true;
  setInterval(() => {
    postMessageActive.value = false;
  }, 6000);
}
/* Delete */

const handleDelete = async (id, title) => {
  if (confirm("Er du sikker på du vil slette?")) {
    const { data: responseData } = await useFetch(
      `http://localhost:4444/tours/admin/${id}`,
      {
        method: "delete",
      }
    );
    if (responseData) {
      msg.value = `Nyhed: ${title} er nu slettet`;
      postMessageActive.value = true;
    }
  }
};
</script>
