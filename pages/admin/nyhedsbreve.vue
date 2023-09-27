<template>
  <div class="w-full">
    <h2 class="text-2xl font-bold">Nyhedsbrevs-tilmeldinger</h2>

    <div v-for="subscriber in subscribers">
      <div class="border-2 border-platinum p-6 mb-6">
        <div class="flex items-center justify-between">
          <p class="font-bold">{{ subscriber.email }}</p>
          <p
            class="px-3 cursor-pointer hover:text-red-800"
            @click="handleDelete(subscriber._id)"
          >
            Slet
          </p>
        </div>
      </div>
    </div>

    <RespondMsg :msg="msg" :displayRes="displayRes" />
  </div>
</template>
<script setup>
const msg = ref("");
const displayRes = ref(false);

const { data: subscribers } = await useFetch(
  "http://localhost:4444/newssubscription/admin",
  {
    watch: [msg],
  }
);

/* Delete */

const handleDelete = async (id) => {
  if (confirm("Er du sikker på du vil slette?")) {
    const { data: responseData, error } = await useFetch(
      `http://localhost:4444/newssubscription/admin/${id}`,
      {
        method: "delete",
      }
    );
    if (error & error.value) {
      console.log(error.value);
      msg.value = "Der er sket en fejl: " + error.value.message;
      displayRes.value = true;
      setInterval(() => {
        displayRes.value = false;
      }, 6000);
    } else if (responseData) {
      msg.value = `Besked er nu slettet`;
      displayRes.value = true;
      setInterval(() => {
        displayRes.value = false;
      }, 6000);
    }
  }
};
</script>
