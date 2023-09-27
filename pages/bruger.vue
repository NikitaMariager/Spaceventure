<template>
  <div class="container max-w-6xl mx-auto max-h-screen">
    <h1 class="text-3xl py-12">
      Velkommen {{ userEmail }}
      <font-awesome-icon icon="fa-solid fa-user-astronaut" />
    </h1>

    <!-- ret profil -->
    <div class="border-gray-200 border-2">
      <h2>Ret profil</h2>
      <form>
        <label for="name" class="block">Navn:</label>
        <input
          type="text"
          name="name"
          id=""
          class="bg-LightGrey p-3 mr-6"
          v-model="name"
        />

        <label for="email" class="block">Email:</label>
        <input
          type="email"
          name="email"
          class="bg-LightGrey p-3 mr-6 w-fit"
          v-model="email"
        />

        <label for="password" class="block">Password:</label>
        <input
          type="text"
          name="password"
          class="bg-LightGrey p-3 mr-6 w-full"
          v-model="password"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const userEmail = ref(route.query.email);
const { data: user } = await useFetch(
  `http://localhost:4444/user/admin/email/${userEmail.value}`
);

const name = ref(user.value.name);
const email = ref(user.value.email);
const password = ref(user.value.password);
</script>
