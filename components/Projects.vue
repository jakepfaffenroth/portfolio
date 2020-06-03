<template>
  <section class="flex m-8 h-screen space-x-12 justify-center text-center">
    <div v-for="project in projects" :key="project" class="project">
      <img :src="project.image" class="mb-4" />
      <div class="project-text">
        <h3 class="text-2xl">{{ project.title }}</h3>
        <p class="text-lg font-light">{{ project.notes }}</p>
        <p class="text-md font-light">> {{ project.stack }}</p>
        <div class="flex mx-6 mt-2 justify-around">
          <a :href="project.live" class="link-live"> Live </a
          ><a :href="project.gitHub" class="link-github"> GitHub </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WeatherImg from "~/assets/img/weather-app-ss.png";

export default {
  data() {
    return {
      projects: {
        weather: {
          title: "Weather App",
          image: WeatherImg,
          stack: "Vue.js",
          notes: "A clean, modern weather app with efficient data presentation",
          gitHub: "https://www.github.com/jakepfaffenroth/weather-app",
          live: "https://weather.jakepfaf.dev"
        },
        // demo: {
        //   title: "Demo App",
        //   image: WeatherImg,
        //   stack: "Vue.js",
        //   notes: "A clean, modern weather app with efficient data presentation",
        //   gitHub: "https://www.github.com/jakepfaffenroth/weather-app",
        //   live: "https://weather.jakepfaf.dev"
        // }
      }
    };
  }
};
</script>

<style>
.project {
  @apply p-2 w-64 border rounded shadow-sm transition duration-150 ease-in-out;
  height:28rem;
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
