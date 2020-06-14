<template>
  <div>
    <div class="project-modal">
      <button @click="$emit('hideModal')" class="exitBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x-circle"
        >
          <circle class="circle" cx="12" cy="12" r="10"></circle>
          <line class="line" x1="15" y1="9" x2="9" y2="15"></line>
          <line class="line" x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
      </button>
      <img :src="project.image" class="modal-image" />
      <div class="modal-text">
        <h2 class="text-3xl">{{ project.title }}</h2>
        <h3 class="text-xl">{{ project.subtitle }}</h3>
        <p class='mt-4'>{{ project.notes }}</p>
        <!-- <p class='mt-2 font-normal'>Build with:</p> -->
        <p class="mt-4 font-light text-sm">Built with</p>
        <p class="font-normal">{{ project.stack }}</p>
        <div class="modal-links">
          <a :href="project.live" target="_blank" class="link-live"> Live </a>
          <a :href="project.gitHub" target="_blank" class="link-github">
            GitHub
          </a>
        </div>
      </div>
    </div>
    <div class="overlay" @click="$emit('hideModal')"></div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  },
  methods: {}
};
</script>

<style>
.overlay {
  @apply fixed block left-0 right-0 bottom-0 top-0 h-screen w-screen bg-black bg-opacity-50 z-40;
}

.project-modal {
  @apply absolute flex flex-wrap top-0 left-0 right-0 mx-auto z-50 h-full bg-white border rounded shadow-lg transition-all duration-300 ease-in-out;
  margin-top: 5vh;
  width:700px;
  max-width: 80vh;
  max-height: 90vh;
}

.modal-image {
  margin: 0 auto;
  max-height: 50%;
}

.modal-text {
  @apply m-4 h-full font-light;
  /* max-height: 30vh; */
}

.modal-links {
  @apply flex self-end mx-6 my-2 justify-around;
}

.exitBtn {
  @apply absolute;
  top: -0.75rem;
  right: -0.75rem;
}

.feather-x-circle:hover .circle {
  @apply cursor-pointer transition duration-100 ;
  fill: red;
  /* stroke: white; */
}

.feather-x-circle:hover .line {
  @apply cursor-pointer;
  stroke: white;
  /* stroke: white; */
}
</style>
