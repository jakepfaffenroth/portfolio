<template>
  <div
    class="w-full h-56 px-2 mt-2 md:w-1/2 lg:w-1/3 xl:1/3 md:mt-4 md:px-2 xl:mx-0"
  >
    <div
      class="project-card h-full flex bg-white border rounded shadow-lg overflow-hidden"
    >
      <img
        :src="project.image"
        class="w-45perc object-cover object-left-top border-r"
      />
      <!-- text area -->
      <div
        class="relative flex flex-col py-2 px-2 w-full lg:text-sm text-center"
      >
        <p class=" h-1/5 mb-1 text-sm font-light text-gray-800">
          {{ project.stack }}
        </p>
        <div class="mb-2 leading-tight">
          <h2 class="text-lg">{{ project.title }}</h2>
          <h3 v-if="project.subtitle" class="text-base text-gray-600 italic">
            {{ project.subtitle }}
          </h3>
        </div>
        <p class="flex-grow pb-2 text-sm font-light">
          {{ project.snippet }}
        </p>
        <div
          class="justify-self-end flex h-6 justify-around text-sm tracking-wide"
        >
          <a
            v-if="project.live"
            :href="project.live"
            target="blank"
            class="link-live"
          >
            <svg
              class="w-3 h-3 self-end my-auto mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            <span class="my-auto">Live</span> </a
          ><a :href="project.gitHub" target="blank" class="flex link-github">
            <svg
              class="w-3 h-3 self-end my-auto mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path>
            </svg>
            <span class="my-auto">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { project: { type: Object, default: () => {} } }
};
</script>

<style scoped>
/* .project-card {
  width: 400px;
  height: 250px;
} */

/* .project-card:hover {
  @apply shadow-xl
} */

.project-card:hover .link-live {
  @apply text-orange-500 transition-all duration-100 ease-in-out;
  text-shadow: 0 0 0.5px #ed8936;
}
.project-card:hover .link-github {
  @apply text-purple-600 transition-all duration-100 ease-in-out;
  text-shadow: 0 0 0.5px #9f7aea;
}

.project-links {
  @apply row-start-4 flex text-sm font-normal mx-6 justify-around tracking-wide;
}

/* .link-live,
.link-github {
  @apply transition duration-150 ease-in-out;
}
*/

.link-live,
.link-github {
  /* transparent bottom border to preserve spacing on hover*/
  @apply flex border-b-2 border-transparent;
}

.link-live:hover,
.link-github:hover {
  @apply cursor-pointer border-b-2 transition-all duration-75 ease-in-out;
}
.link-live:hover {
  @apply border-orange-500;
}

.link-github:hover {
  @apply border-purple-500;
}
</style>
