<template>
  <section class="flex m-8 h-screen space-x-12 justify-center text-center">
    <div v-for="project in projects" :key="project" class="project">
      <div class="img-wrapper">
        <img :src="project.image" class="object-cover" />
      </div>
      <div class="self-start">
        <h3 class="text-2xl">{{ project.title }}</h3>
        <!-- <p class="text-md font-light">{{ project.stack }}</p> -->
        <p class="my-4 text-md font-light">{{ project.notes }}</p>
      </div>
      <div class="flex w-full self-end mx-6 mt-0 justify-around ">
        <a :href="project.live" class="link-live"> Live </a>
        <a :href="project.gitHub" class="link-github"> GitHub </a>
      </div>
    </div>
  </section>
</template>

<script>
import WeatherImg from "~/assets/img/weather-app-ss.png";
import DrawImg from "~/assets/img/draw-ss.png";

export default {
  data() {
    return {
      projects: {
        weather: {
          title: "Weather App",
          image: WeatherImg,
          stack: "Vue.js",
          notes:
            "Built using Vue.js, Tailwind.css, & Chart.js. Weather data from Climacell API. Geolocation data from HERE.",
          gitHub: "https://www.github.com/jakepfaffenroth/weather-app",
          live: "https://weather.jakepfaf.dev"
        },
        draw: {
          title: "Draw",
          image: DrawImg,
          stack: "HTML, JS, CSS",
          notes: "Simple drawing app built in plain HTML, Javascript, and CSS",
          gitHub: "https://www.github.com/jakepfaffenroth/Draw",
          live: "https://draw.jakepfaf.dev"
        }
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
  @apply flex flex-wrap p-2 w-64 border rounded shadow-sm transition duration-150 ease-in-out;
  height: 30rem;
}

.project:hover {
  @apply shadow-md;
}

.img-wrapper {
  height: 16rem;
  margin-bottom: 1rem;
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
