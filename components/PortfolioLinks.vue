<template>
  <div id="links">
    <a
      href="https://github.com/jakepfaffenroth"
      target="_blank"
      class="btn btn-green"
    >
      GitHub
    </a>
    <a href="#projects" target="_blank" class="btn btn-orange">
      Projects
    </a>
    <a href="mailto:hello@jakepfaf.dev" target="_blank" class="btn btn-yellow">
      Email me
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.btn {
  @apply w-24 py-2 px-3 text-sm border text-gray-900 bg-white rounded shadow  transition duration-150 ease-in-out;
}
.btn-green {
  @apply border-green-500;
}

.btn-green:hover {
  @apply bg-green-600 text-white;
}

.btn-orange {
  @apply border-orange-500;
}

.btn-orange:hover {
  @apply bg-orange-600 text-white;
}

.btn-yellow {
  @apply border-yellow-500;
}

.btn-yellow:hover {
  @apply bg-yellow-500 border-yellow-400 text-gray-800;
}

</style>
