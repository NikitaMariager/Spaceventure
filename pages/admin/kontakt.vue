<template>
  <div class="w-full">
    <h2 class="text-2xl font-bold">Bookings</h2>
    <div v-for="contact in contacts">
      <div class="border-2 border-platinum p-6 mb-6">
        <div class="flex items-center justify-between">
          <p class="font-bold">{{ contact.name }}</p>

          <button
            class="p-3 text-white w-32 hover:bg-safetyOrangeBlazeOrange"
            :class="{
              ' bg-gray-400': contact.read === false,
              'bg-Aqua': contact.read === true,
            }"
            @click="read(contact._id, contact.read)"
          >
            <span v-if="contact.read === true"
              >læst <font-awesome-icon icon="fa-solid fa-envelope-circle-check"
            /></span>
            <span v-else
              >ulæst <font-awesome-icon icon="fa-regular fa-envelope"
            /></span>
          </button>
        </div>

        <div class="flex">
          <p class="pr-3">Tilføj note</p>
          <p class="border-x border-gray-400 px-3">Se detaljer</p>
          <p class="px-3">Slet</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const readChange = ref("");

const { data: contacts } = await useFetch(
  "http://localhost:4444/contact/admin",
  { watch: [readChange] }
);

const read = async (id, status) => {
  const { data: read } = await useFetch(
    `http://localhost:4444/contact/admin/${id}`,
    {
      method: "patch",
      body: { read: !status },
    }
  );
  if (read) {
    readChange.value = id + status;
  }
};
</script>
