<template>
  <div class="container max-w-5xl mx-auto max-h-screen relative" v-if="name">
    <h1 class="text-3xl py-12">
      Velkommen
      {{ name }}
      <font-awesome-icon icon="fa-solid fa-user-astronaut" />
    </h1>

    <!-- ret profil -->
    <div class="border-gray-200 border-2 p-3 mb-12">
      <h2 class="text-xl pb-6 font-bold">Ret profil</h2>
      <form>
        <div class="flex justify-between gap-3 items-center">
          <label for="name">Navn:</label>
          <input
            type="text"
            name="name"
            id=""
            class="bg-LightGrey p-3 mr-6 w-full h-fit"
            v-model="name"
          />

          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            class="bg-LightGrey p-3 mr-6 w-full"
            v-model="email"
          />
        </div>

        <label for="password" class="block">Password:</label>
        <input
          type="text"
          name="password"
          class="bg-LightGrey p-3 mr-6 w-full"
          v-model="password"
        />

        <button
          type="submit"
          class="bg-Aqua py-3 w-full text-white hover:bg-DarkBlue mt-3"
          @click.prevent="handleSubmit"
        >
          Ret
        </button>
      </form>
    </div>

    <!-- Slet profil -->
    <div class="border-gray-200 border-2 p-3 mb-12">
      <h2 class="text-xl pb-6 font-bold">Slet profil</h2>
      <form>
        <div class="flex justify-between gap-3 items-center">
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            class="bg-LightGrey p-3 mr-6 w-full"
            v-model="email"
          />
        </div>

        <button
          type="submit"
          class="bg-Aqua py-3 w-full text-white hover:bg-DarkBlue mt-3"
          @click.prevent="handleDelete"
        >
          Ret
        </button>
      </form>
    </div>

    <div class="absolute top-0 bg-white w-full h-full" v-if="deletet">
      <div class="flex flex-col items-center pt-52">
        <h6 class="text-2xl">Din Profil er nu blevet slettet</h6>
        <NuxtLink
          to="/"
          class="bg-Aqua p-3 text-white hover:bg-DarkBlue mt-3 text-center"
          >Gå til forsiden</NuxtLink
        >
      </div>
    </div>

    <RespondMsg :msg="msg" :displayRes="postMessageActive" />
  </div>
</template>

<script setup>
const deletet = ref(false);
const msg = ref("");
const postMessageActive = ref(false);

const { data: user } = await useFetch(`http://localhost:4444/user/admin`, {
  watch: [msg],
});

const getAdmin = computed(() => {
  if (user.value) {
    return user.value.filter((userData) => userData.admin === true);
  }
});

const name = ref(getAdmin.value[0]?.name);
const email = ref(getAdmin.value[0]?.email);
const password = ref(getAdmin.value[0]?.password);
const admin = ref(true);

const handleSubmit = async () => {
  const { data: responseData, error } = await useFetch(
    `http://localhost:4444/user/admin/${getAdmin.value[0]._id}`,
    {
      method: "put",
      body: {
        name: name.value,
        email: email.value,
        password: password.value,
        admin: admin.value,
      },
    }
  );
  if (error.value !== null) {
    setMessage(`Der er sket en fejl: ${error.value}`);
  } else if (responseData) {
    setMessage("Profil info er nu rettet");
  }
};

/* Delete */

const handleDelete = async (id) => {
  if (confirm("Er du sikker på du vil slette?")) {
    const { data: responseData, error } = await useFetch(
      `http://localhost:4444/user/admin/${user.value._id}`,
      {
        method: "delete",
      }
    );
    if (error & error.value) {
      setMessage(`Der er sket en fejl: ${error.value}`);
    } else if (responseData) {
      deletet.value = true;
    }
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
