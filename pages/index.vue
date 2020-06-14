<template>
  <section class="sm:px-8 md:px-16 lg:px-32 xl:px-56">
    <div
      id="hello"
      class="flex flex-col sm:flex-row px-4 sm:px-0 sm:pt-12 sm:space-x-12"
    >
      <photo
        class="col-start-1 m-auto self-start h-32 w-32 sm:h-56 sm:w-56 mt-5 rounded-full"
      />
      <div
        id="hello-text"
        class="sm:col-start-2 lg:pr-32 md:text-md font-light font-body text-gray-900 text-center sm:text-left "
      >
        <p class="my-2 sm:mt-0 text-3xl sm:text-4xl font-display  ">
          Hello
        </p>
        <p>
          I'm a full stack web developer with a Ph.D. in anthropology. I have
          experience in higher education, non-profit leadership, and small
          business.
        </p>
        <br />
        <p>
          I develop responsive web apps with intuitive, modern user
          experiences.<br /><br /><br />
        </p>
        <!-- <portfolio-links class="flex mt-6 justify-center space-x-4" /> -->
      </div>
    </div>
    <!-- Tech Stack Row -->
    <div
      id="stack"
      class="stack px-8 sm:mt-20 md:px-24 lg:px-32 xl:px-48 space-x-6"
    >
      <p class="p-1 sm:p-2" v-for="tech in techStack" :key="tech.name">
        {{ tech.name }}
      </p>
    </div>
    <portfolio-links />
  </section>
</template>

<script>
import Photo from "~/components/Photo.vue";
import PortfolioLinks from "~/components/PortfolioLinks.vue";

export default {
  head() {
    return {
      title: "Jake Pfaffenroth"
    };
  },
  components: {
    Photo,
    PortfolioLinks
    // AboutMe,
    // Projects,
    // Resume
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
        firebase: { name: "Firebase", img: "" }
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

.stack {
  @apply flex flex-wrap justify-center w-full;
}
</style>
