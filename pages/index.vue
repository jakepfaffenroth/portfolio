<template>
  <div>
    <navbar v-on:change-page="view = $event" />
    <transition name="slide" mode="out-in">
      <component :is="view" />
      <!-- <welcome /> -->
      <!-- Projects anchor tag -->
      <!-- <a id="projects"></a> -->
      <!-- <projects id="projects"  /> -->
      <!-- <a id="resume"></a> -->
      <!-- <resume /> -->
    </transition>
  </div>
</template>

<script>
import Navbar from "~/components/Nav.vue";
import Welcome from "~/components/Welcome.vue";
import Projects from "~/components/Projects.vue";
import Resume from "~/components/Resume.vue";

export default {
  components: {
    Navbar,
    Welcome,
    Projects,
    Resume
  },
  data() {
    return {
      view: "Welcome"
    };
  }
  // computed:{
  //   component (){
  //     switch (this.page){
  //       case
  //     }
  //   }
  // },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

html {
  @apply font-body;
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5 {
  @apply font-display;
}

#hello {
  display: grid;
  grid-template-rows: 1fr, 3fr;
}

/* Page transitions */
.slide-enter {
  transform: translate(-2em, 0);
  opacity: 0;
}

.slide-enter-to,
.slide-leave {
  opacity: 1;
  transform: translate(0, 0);
}

.slide-leave-to {
  transform: translate(2em, 0);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition-duration: 0.1s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}
</style>
