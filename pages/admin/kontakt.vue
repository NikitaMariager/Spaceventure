<template>
  <div class="w-full">
    <div class="flex justify-between items-center pb-12">
      <h2 class="text-2xl font-bold">Kontak - beskeder</h2>
      <div class="flex flex-col md:flex-row">
        <p>Sorter efter:</p>
        <select
          v-model="sorting"
          name="sorting"
          placeholder="Dato"
          :value="sorting"
        >
          <option value="received">Dato</option>
          <option value="name">Navn</option>
          <option value="email">Email</option>
        </select>
      </div>
    </div>
    <div v-for="contact in sortedContacts">
      <div class="border-2 border-platinum p-6 mb-6">
        <div class="flex items-center justify-between">
          <p class="font-bold">{{ contact.name }}</p>

          <button
            class="p-3 text-white w-32 hover:bg-DarkBlue"
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

        <div class="flex flex-col md:flex-row text-gray-500 pt-3 md:pt-0">
          <p class="border-b md:border-r border-gray-400 pr-3 pb-3 md:pb-0">
            Email: {{ contact.email }}
          </p>
          <p
            class="border-b py-3 md:py-0 md:border-r border-gray-400 px-0 md:px-3"
          >
            Modtaget d. {{ dateConvertDay(contact.received) }}
          </p>
          <p
            class="px-3 cursor-pointer hover:text-red-800 pt-3 md:pt-0"
            @click="handleDelete(contact._id)"
          >
            Slet
          </p>
        </div>

        <div class="border-t border-gray-400 pt-3 mt-3">
          <p>{{ contact.message }}</p>
        </div>
      </div>
    </div>

    <RespondMsg :msg="msg" :displayRes="displayRes" />
  </div>
</template>
<script setup>
const readChange = ref("");
const msg = ref("");
const displayRes = ref(false);
const sorting = ref("received");

const { data: contacts } = await useFetch(
  "http://localhost:4444/contact/admin",
  { watch: [readChange, msg] }
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

/* dato */
function dateConvertDay(eventDate) {
  const formatetDate = eventDate.substring(0, 10);

  const date = new Date(formatetDate).toLocaleString("da", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const day = date.replace(".", "");

  return day;
}

const sortedContacts = computed(() => {
  console.log(sorting.value);
  return contacts.value.slice().sort((a, b) => {
    switch (sorting.value) {
      case "received":
        const dateA = new Date(a.received);
        const dateB = new Date(b.received);
        return dateB - dateA;
      case "name":
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return nameA.localeCompare(nameB);
      case "email":
        const emailA = a.email.toLowerCase();
        const emailB = b.email.toLowerCase();
        return emailA.localeCompare(emailB);
      default:
        return 0; // No sorting
    }
  });
});

/* Delete */

const handleDelete = async (id) => {
  if (confirm("Er du sikker på du vil slette?")) {
    const { data: responseData } = await useFetch(
      `http://localhost:4444/contact/admin/${id}`,
      {
        method: "delete",
      }
    );
    if (responseData) {
      msg.value = `Besked er nu slettet`;
      displayRes.value = true;
      setInterval(() => {
        displayRes.value = false;
      }, 6000);
    }
  }
};
</script>
