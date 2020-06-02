<template>
  <div class="sm:px-8 md:px-16 lg:px-48">
    <header
      class="sticky sm:flex justify-between pt-4 space-y-4 sm:space-y-0 text-center font-display"
    >
      <div class="flex sm:block">
        <photo class="block sm:hidden h-20 w-20 mx-12 rounded-full" />

        <div class="self-center">
          <a href="#me" class="text-xl font-bold">Jake Pfaffenroth</a>
          <p class="font-normal">Full stack web developer</p>
        </div>
      </div>
      <!-- TODO - Make responsive compact menu -->
      <nav class="space-x-6">
        <a v-for="(value, name, index) in navLinks" :key="value">
          <a :id="'nav-link-' + index" :href="value.link" class="nav-links">{{
            value.name
          }}</a>
        </a>
      </nav>
    </header>
    <div id="hello" class="h-full flex px-4 sm:px-0 sm:pt-12 ">
      <photo
        class="hidden sm:block self-start h-24 w-24 sm:h-64 sm:w-64 mr-12 sm:mt-8 lg:mt-4 rounded-full"
      />
      <div
        id="hello-text"
        class="lg:pr-32 md:text-md font-thin font-body text-gray-900 "
      >
        <h1 class="text-3xl sm:text-4xl font-light font-display  ">
          Hello
        </h1>
        <p>
          I'm a full stack web developer with diverse range of experience
          including higher education, non-profit leadership, and professional
          photography. I'm interested in lots of things, and when I want to
          learn something I dive in head-first. In 2018 I completed a Ph.D. in
          Anthropology and, after teaching in higher education for several
          years, decided to pursue web development.
        </p>
        <br />
        <p>
          I'm passionate about learning new skills and science education.
        </p>
        <!-- <portfolio-links class="flex mt-6 justify-center space-x-4" /> -->
      </div>
    </div>
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
    <!-- Projects anchor tag -->
    <a id="projects"></a>
    <projects />
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
      navLinks: {
        me: { id: "me", name: "Me", link: "#me" },
        gitHub: {
          id: "github",
          name: "GitHub",
          link: "https://www.github.com/jakepfaffenroth"
        },
        projects: { id: "projects", name: "Projects", link: "#projects" },
        resume: { id: "resume", name: "Resume", link: "#resume" },
        email: {
          id: "email",
          name: "hello@jakepfaf.dev",
          link: "mailto:hello@jakepfaf.dev"
        }
      },
      techStackFE: {
        html5: { name: "HTML5", img: VueLogo },
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

.stack {
  @apply flex flex-wrap px-2 justify-center;
}
</style>
