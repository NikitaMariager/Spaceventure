<template>
  <div class="container max-w-6xl mx-auto py-12 w-full">
    <LeafMap />
    <div>
      <div class="flex py-6 items-center">
        <h1 class="border-r border-gray-300 w-fit pr-3 text-2xl font-semibold">
          Kontakt
        </h1>
        <p class="pl-3 text-BlueGrey">
          skulle du sidde med et spørgsmål eller to, så skriv endelig til os og
          vi vil kontakte dig hurtigst muligt.
        </p>
      </div>
      <form action="">
        <div class="flex gap-3">
          <input
            type="text"
            name="name"
            v-model="formData.name"
            id=""
            placeholder="Dit navn"
            required
            class="w-full bg-LightGrey p-3"
          />
          <input
            type="email"
            name="email"
            v-model="formData.email"
            id=""
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            placeholder="E-mail"
            title="Indtast en gyldig email eks. spaceventure@toinfinity.com"
            required
            class="w-full bg-LightGrey p-3"
          />
          <input
            type="tel"
            name="tel"
            v-model="formData.phone"
            id=""
            placeholder="Tlf"
            required
            pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
            title="Indtast et telefon nummer eks. 50521790"
            class="w-full bg-LightGrey p-3"
          />
        </div>
        <textarea
          name="message"
          v-model="formData.message"
          class="w-full bg-LightGrey p-3 my-3"
          id=""
          cols="30"
          rows="10"
          required
          placeholder="Besked"
        ></textarea>

        <div class="flex gap-6 items-center">
          <button
            type="submit"
            class="bg-Aqua text-white py-3 px-24 hover:bg-DarkBlueGrey"
            @click.prevent="handleSubmit"
          >
            Send
          </button>
          <p class="text-Aqua">
            {{ respondMessage }}
            <font-awesome-icon
              icon="fa-solid fa-rocket"
              :class="respondMessage === '' ? 'invisible' : 'visible'"
            />
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const respondMessage = ref("");

const formData = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleSubmit = async () => {
  const { data: responseData } = await useFetch(
    "http://localhost:4444/contact",
    {
      method: "post",
      body: {
        name: formData.value.name,
        email: formData.value.email,
        phone: formData.value.phone,
        message: formData.value.message,
      },
    }
  );
  if (responseData) {
    respondMessage.value = "Din besked er sendt";
    formData.value.name = "";
    formData.value.email = "";
    formData.value.phone = "";
    formData.value.message = "";

    setTimeout(() => {
      respondMessage.value = "";
    }, 6000);
  }
};
</script>
