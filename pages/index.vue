<template>
  <div>
    <div
      id="hello"
      class="h-screen flex pt-12 sm:pt-0 sm:items-center justify-center text-center"
    >
      <div class="text-gray-900">
        <photo class="h-64 w-64 m-auto rounded-full" />
        <div id="hello-text" class="mt-4 text-gray-900">
          <h1 class="text-4xl sm:text-5xl font-light">
            JAKE PFAFFENROTH
          </h1>
          <h2 class="text-2xl sm:text-3xl font-thin">
            Full stack web developer
          </h2>
          <!-- Tech Stack rows -->
          <div id="front-end-stack" class="stack sm:px-8 pt-6 space-x-6">
            <p class="p-1 sm:p-2" v-for="tech in techStackFE" :key="tech">
              {{ tech.name }}
            </p>
          </div>
          <div id="back-end-stack" class="stack sm:px-8 pb-4 sm:pb-6 space-x-6">
            <p class="p-1 sm:p-2" v-for="tech in techStackBE" :key="tech">
              {{ tech.name }}
            </p>
          </div>
          <!-- Links display only on wider screens -->
          <portfolio-links class="flex mt-6 justify-center space-x-4" />
        </div>
      </div>
    </div>
    <projects id="projects" />
  </div>
</template>

<script>
import VueLogo from "~/assets/img/vue-logo.svg";
import Photo from "~/components/Photo.vue";
import Projects from "~/components/Projects.vue";
import PortfolioLinks from "~/components/PortfolioLinks.vue";
import PortfolioLinksMobile from "~/components/PortfolioLinksMobile.vue";

export default {
  components: {
    Photo,
    Projects,
    PortfolioLinks
  },
  data() {
    return {
      techStackFE: {
        html5: { name: "html5", img: VueLogo },
        css3: { name: "CSS3", img: VueLogo },
        js: { name: "Javascript", img: VueLogo },
        vue: { name: "Vue.js", img: VueLogo }
      },
      techStackBE: {
        express: { name: "Express", img: "" },
        nodejs: { name: "Node.js", img: "" },
        mongodb: { name: "MongoDb", img: "" },
        sql: { name: "SQL", img: "" }
      }
    };
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
html {
  scroll-behavior: smooth;
}

.stack {
  @apply flex flex-wrap px-2 justify-center;
}
</style>
