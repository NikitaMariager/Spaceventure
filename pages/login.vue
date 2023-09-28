<template>
  <div class="h-screen bg-DarkBlue pt-40">
    <form
      @submit.prevent="handleSubmit"
      class="bg-white mx-auto p-20 rounded-lg shadow-2xl w-fit"
    >
      <h1 class="text-2xl font-semibold pb-3">Login <span>Admin</span></h1>
      <p>{{ msg }}</p>
      <input
        type="email"
        placeholder="Email"
        class="bg-LightGrey p-3"
        v-model="formData.email"
        required
      />
      <input
        type="password"
        required
        placeholder="Password"
        class="block my-3 bg-LightGrey p-3"
        v-model="formData.password"
      />

      <button class="bg-Aqua text-white p-3 w-full hover:bg-DarkBlue">
        Log in
      </button>
    </form>
  </div>
</template>

<script setup>
const msg = ref("");

const formData = ref({
  email: "",
  password: "",
});

const handleSubmit = async () => {
  try {
    const { data: responseData, error } = await useFetch(
      "http://localhost:4444/login/login",
      {
        method: "post",
        body: {
          email: formData.value.email,
          password: formData.value.password,
        },
      }
    );

    // Handle the response from the server
    if (responseData) {
      if (responseData.value.admin === true) {
        // Admin user login
        // Redirect to the admin dashboard or perform admin-specific actions
        msg.value = "AdminLogin successful!";
        navigateTo(`/admin/profil?email=${formData.value.email}`);
      } else {
        // Regular user login
        // Redirect to the user dashboard or perform user-specific actions
        msg.value = "Login successful! ";
        navigateTo(`/bruger?email=${formData.value.email}`);
      }
    } else {
      msg.value = `"Ups, der er sket en fejl. Tjek venligt dit login "`;
    }
  } catch (error) {
    msg.value = "Login failed. Please check your credentials.";
    console.error("Error:", error);
  }
};
</script>
