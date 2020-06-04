<template>
  <section class="flex p-8 h-screen bg-gray-800 space-x-12 justify-center text-center">
    <div v-for="project in projects" :key="project.name" class="project">
      <a @click="openModal(project)">
        <img :src="project.image" class="mb-4" />
        <div class="project-text">
          <h3 class="text-2xl">{{ project.title }}</h3>
          <!-- <p class="text-lg font-light">{{ project.notes }}</p> -->
          <p class="text-md font-light"> {{ project.stack }}</p>
          <div class="flex mx-6 mt-2 justify-around">
            <a :href="project.live" class="link-live"> Live </a
            ><a :href="project.gitHub" class="link-github"> GitHub </a>
          </div>
        </div>
      </a>
    </div>
    <project-modal
      :project='project'
      v-show="isVisible"
      v-on:hideModal="hideModal"
      class="-ml-0"
    />
  </section>
</template>

<script>
import WeatherImg from "~/assets/img/weather-app-ss.png";
import DrawImg from "~/assets/img/draw-ss.png";
import ProjectModal from "./ProjectModal.vue";

export default {
  components: {
    ProjectModal
  },
  data() {
    return {
      isVisible: false,
      project: {},
      projects: {
        weather: {
          title: "Weather App",
          image: WeatherImg,
          stack: "Vue.js, Tailwind.css, Chart.js",
          notes: `I was dissatisfied by existing weather apps (mobile and desktop), so I built the one I wanted. I designed it to be clean and modern with efficient data presentation.
          Built using Vue.js, Tailwind.css, & Chart.js. Weather data from Climacell API.
          Geolocation data from HERE.`,
          gitHub: "https://www.github.com/jakepfaffenroth/weather-app",
          live: "https://weather.jakepfaf.dev"
        },
        draw: {
          title: "Draw",
          image: DrawImg,
          stack: "HTML, CSS, JS",
          notes: "A simple drawing app with a simple name. Built in plain HTML, Javascript, and CSS.",
          gitHub: "https://www.github.com/jakepfaffenroth/Draw",
          live: "https://draw.jakepfaf.dev"
        }
      }
    };
  },
  methods: {
    openModal(project) {
      this.project = project;
      this.isVisible = !this.isVisible;
    },
    hideModal() {
      this.isVisible = false;
    }
  }
};
</script>

<style>
.project {
  @apply p-2 w-64 bg-white border rounded shadow-sm transition duration-150 ease-in-out;
  height: 28rem;
}

.project:hover {
  @apply shadow-md;
}

.link-live,
.link-github {
  @apply transition duration-150 ease-in-out;
}

.link-live:hover {
  @apply cursor-pointer text-green-600;
}

.link-github:hover {
  @apply cursor-pointer text-orange-600;
}
</style>
