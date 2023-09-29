<template>
  <div>
    <p class="to-BlueGrey">
      <span class="font-semibold text-Aqua">Take off om:</span> {{ days }} dage
      {{ hours }} timer {{ minutes }} min. {{ seconds }} sek.
    </p>
    <p>
      <span class="font-semibold text-Aqua"> Afrejse: </span>
      {{ dateConvertDay(launchDate) }}
    </p>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  launchDate: {
    type: String,
    required: true,
    default: "",
  },
});

/* Count down */

// sest date for next launch given as prop
const targetDate = new Date(props.launchDate).getTime();

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const message = ref("");

// Function to update the countdown
const updateCountdown = () => {
  /* getting date of today*/
  const now = new Date().getTime();

  //getting time diffenrence between lanchdate and today
  const timeDifference = targetDate - now;

  //getting time difference in sec.
  if (timeDifference > 0) {
    const remainingSeconds = Math.floor(timeDifference / 1000);
    days.value = Math.floor(remainingSeconds / 86400); // get whole days in sec, since there is 86400 sec in a day.
    hours.value = Math.floor((remainingSeconds % 86400) / 3600); //%trækker hele dage fra og finder hele timer ud fra den resterende tid divider med 3600 antal sek der går på en time
    minutes.value = Math.floor((remainingSeconds % 3600) / 60); // % trækker hele timer fra og finder hele min da der går 60 sek på et minut
    seconds.value = remainingSeconds % 60; //trækker hele min fra og det resterende er sek der er til rejse
  } else {
    message.value =
      "Raketten har forladt jorden, der er ikke planlagt en ny rejsen endnu.";
  }
};

// Function to start the countdown
const startCountdown = () => {
  updateCountdown();
  const countdownInterval = setInterval(() => {
    updateCountdown();
  }, 1000);
};

// Start the countdown when the component is mounted
onMounted(() => {
  startCountdown();
});

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
</script>
