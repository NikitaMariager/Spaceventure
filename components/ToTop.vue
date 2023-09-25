<template>
  <div>
    <!-- to top btn -->
    <transition name="fade">
      <div
        id="pagetop"
        class="fixed right-10 bottom-10 bg-Aqua py-4 px-5 cursor-pointer"
        v-show="scY"
        @click="toTop"
      >
        <span class="text-white group-hover:text-safetyOrangeBlazeOrange">
          <font-awesome-icon icon="fa-solid fa-chevron-up" />
        </span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
