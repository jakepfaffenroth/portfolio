<template>
  <div>
    <div class="project-modal">
      <img :src="project.image" />
      <div class='text-content'>
        <h2 class="text-3xl">{{ project.title }}</h2>
        <p>{{project.notes}}</p>
        <!-- <p class='mt-2 font-normal'>Build with:</p> -->
        <p class='mt-4 font-normal'>{{project.stack}}</p>
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
  @apply absolute mt-24 left-0 right-0 m-auto z-50 bg-white border shadow;
  max-width: 60vw;
}

.text-content{
  @apply m-4 font-light
}
</style>
