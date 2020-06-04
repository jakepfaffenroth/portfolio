<template>
  <section class="sm:px-8 md:px-16 lg:px-48">
    <div id="hello" class="flex px-4 sm:px-0 sm:pt-12 space-x-12">
      <photo
        class="col-start-1 hidden sm:block self-start h-auto w-auto sm:h-56 sm:w-56 mt-2 rounded-full"
      />
      <div
        id="hello-text"
        class="col-start-2 lg:pr-32 md:text-md font-light font-body text-gray-900"
      >
        <p class="text-3xl sm:text-4xl font-display  ">
          Hello
        </p>
        <p>
          I'm a full stack web developer with diverse range of experience
          including higher education, non-profit leadership, and photography.
          I'm interested in lots of things, and when I want to learn something I
          dive in head-first. In 2018 I completed a Ph.D. in Anthropology and,
          after teaching in higher education for several years, decided to
          pursue web development.
        </p>
        <br />
        <p>
          I'm passionate about learning new skills and science education.<br /><br /><br />
        </p>
        <!-- <portfolio-links class="flex mt-6 justify-center space-x-4" /> -->
      </div>
    </div>
    <!-- Tech Stack Row -->
    <div id="stack" class="stack px-20 md:px-24 lg:px-32 xl:px-48 space-x-6">
      <p class="p-1 sm:p-2" v-for="tech in techStack" :key="tech">
        {{ tech.name }}
      </p>
    </div>
  </section>
</template>

<script>
import Photo from "~/components/Photo.vue";

export default {
  components: {
    Photo
  },
  data() {
    return {
      techStack: {
        html5: { name: "HTML5", img: "" },
        css3: { name: "CSS3", img: "" },
        js: { name: "Javascript", img: "" },
        vue: { name: "Vue.js", img: "" },
        tailwind: { name: "Tailwind.css", img: "" },
        bootstrap: { name: "Bootstrap", img: "" },
        chartjs: { name: "Chart.js", img: "" },
        express: { name: "Express", img: "" },
        nodejs: { name: "Node.js", img: "" },
        mongodb: { name: "MongoDb", img: "" },
        sql: { name: "SQL", img: "" }
      },
      techStackFE: {
        html5: { name: "HTML5", img: "" },
        css3: { name: "CSS3", img: "" },
        js: { name: "Javascript", img: "" },
        vue: { name: "Vue.js", img: "" }
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
.stack {
  @apply flex flex-wrap mt-24 justify-center w-full;
}
</style>
