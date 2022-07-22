<template>
  <div style="display: contents">
    <button
      class="m-2 btn"
      :class="btnStyle"
      style="cursor: pointer; border-radius: 21px"
    >
      <label v-if="!loading" style="cursor: pointer">
        <i :class="icon"></i>
        {{ text }}
      </label>

      <label v-if="loading">
        <div class="spinner-border spinner-border-sm text-light" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </label>
    </button>
  </div>
</template>

<script>
export default {
  name: "LoadingButton",
  props: ["loading", "text", "btnStyle", "icon"],
};
</script>
