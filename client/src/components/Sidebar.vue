<template>
  <div class="multi-column">
    <div>
      <h3 class="side-bar-title">Version</h3>
      <div class="side-bar-desc">
        <svg
          width="32"
          height="32"
          viewBox="0 0 470 470"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M416,160a64,64,0,1,0-96.27,55.24c-2.29,29.08-20.08,37-75,48.42-17.76,3.68-35.93,7.45-52.71,13.93V151.39a64,64,0,1,0-64,0V360.61a64,64,0,1,0,64.42.24c2.39-18,16-24.33,65.26-34.52,27.43-5.67,55.78-11.54,79.78-26.95,29-18.58,44.53-46.78,46.36-83.89A64,64,0,0,0,416,160ZM160,64a32,32,0,1,1-32,32A32,32,0,0,1,160,64Zm0,384a32,32,0,1,1,32-32A32,32,0,0,1,160,448ZM352,192a32,32,0,1,1,32-32A32,32,0,0,1,352,192Z"
          />
        </svg>
        {{ meta.version }}
      </div>
    </div>
    <div>
      <h3 class="side-bar-title">License</h3>
      <div class="side-bar-desc">
        <svg fill="currentColor" viewBox="0 0 100 100" width="100" height="100">
          <path
            fill="currentColor"
            d="m 40,62.5 h -0.0031 c 0,-2.528125 0.209375,-1.364063 -13.289062,-28.360937 -2.757813,-5.514063 -10.654688,-5.525 -13.417188,0 C -0.321875,61.367187 0.003125,60.051562 0.003125,62.5 H 0 C 0,69.403125 8.9546875,75 20,75 31.045313,75 40,69.403125 40,62.5 Z M 20,37.5 31.25,60 H 8.75 Z m 79.996875,25 c 0,-2.528125 0.209375,-1.364063 -13.289062,-28.360937 -2.757813,-5.514063 -10.654688,-5.525 -13.417188,0 C 59.678125,61.367187 60.003125,60.051562 60.003125,62.5 H 60 c 0,6.903125 8.954688,12.5 20,12.5 11.045313,0 20,-5.596875 20,-12.5 z M 68.75,60 80,37.5 91.25,60 Z M 82.5,80 H 55 V 33.945312 C 58.673437,32.3375 61.43125,29.026562 62.248437,25 H 82.5 c 1.38125,0 2.5,-1.11875 2.5,-2.5 v -5 C 85,16.11875 83.88125,15 82.5,15 H 59.94375 C 57.6625,11.98125 54.076562,10 50,10 c -4.076562,0 -7.6625,1.98125 -9.94375,5 H 17.5 C 16.11875,15 15,16.11875 15,17.5 v 5 c 0,1.38125 1.11875,2.5 2.5,2.5 H 37.751563 C 38.56875,29.025 41.325,32.3375 45,33.945312 V 80 H 17.5 C 16.11875,80 15,81.11875 15,82.5 v 5 c 0,1.38125 1.11875,2.5 2.5,2.5 h 65 c 1.38125,0 2.5,-1.11875 2.5,-2.5 v -5 C 85,81.11875 83.88125,80 82.5,80 Z"
            id="path2144"
            style="stroke-width: 0.15625"
          />
        </svg>
        {{ meta.license }}
      </div>
    </div>
  </div>
  <div class="hr-line"></div>
  <div class="multi-column">
    <div>
      <h3 class="side-bar-title">SizeJs</h3>
      <div class="side-bar-desc" @mouseenter="getSize">
        <svg fill="currentColor" viewBox="0 0 100 100" width="100" height="100">
          <path
            fill="currentColor"
            d="m 50.001953,0 c -10.355502,0 -18.75,8.3944982 -18.75,18.75 0,2.203132 0.449217,4.287103 1.148438,6.25 H 20.632812 c -2.818369,0 -5.28906,2.058584 -6.029296,5.023438 L 0.3359375,87.082031 C -1.2910208,93.587911 3.1991989,100 9.3808594,100 H 90.621094 c 6.179707,0 10.669916,-6.412089 9.042968,-12.917969 L 85.400391,30.023438 C 84.658201,27.056632 82.189462,25 79.371094,25 H 67.603516 c 0.697268,-1.962897 1.148437,-4.046868 1.148437,-6.25 0,-10.3555018 -8.394498,-18.75 -18.75,-18.75 z M 50,12.498047 c 3.445323,0 6.25,2.804677 6.25,6.25 0,3.445324 -2.804677,6.25 -6.25,6.25 -3.445324,0 -6.25,-2.804676 -6.25,-6.25 0,-3.445323 2.804676,-6.25 6.25,-6.25 z M 23.908,34.792969 H 76.318359 L 90.011,89.602 H 10.279 Z"
            id="path2144"
            style="stroke-width: 0.15625"
          />
        </svg>
        {{ sizeJs }}
      </div>
    </div>
    <div>
      <h3 class="side-bar-title">SizeCss</h3>
      <div class="side-bar-desc" @mouseenter="getSize">
        <svg fill="currentColor" viewBox="0 0 100 100" width="100" height="100">
          <path
            fill="currentColor"
            d="m 50.001953,0 c -10.355502,0 -18.75,8.3944982 -18.75,18.75 0,2.203132 0.449217,4.287103 1.148438,6.25 H 20.632812 c -2.818369,0 -5.28906,2.058584 -6.029296,5.023438 L 0.3359375,87.082031 C -1.2910208,93.587911 3.1991989,100 9.3808594,100 H 90.621094 c 6.179707,0 10.669916,-6.412089 9.042968,-12.917969 L 85.400391,30.023438 C 84.658201,27.056632 82.189462,25 79.371094,25 H 67.603516 c 0.697268,-1.962897 1.148437,-4.046868 1.148437,-6.25 0,-10.3555018 -8.394498,-18.75 -18.75,-18.75 z M 50,12.498047 c 3.445323,0 6.25,2.804677 6.25,6.25 0,3.445324 -2.804677,6.25 -6.25,6.25 -3.445324,0 -6.25,-2.804676 -6.25,-6.25 0,-3.445323 2.804676,-6.25 6.25,-6.25 z M 23.908,34.792969 H 76.318359 L 90.011,89.602 H 10.279 Z"
            id="path2144"
            style="stroke-width: 0.15625"
          />
        </svg>
        {{ sizeCss }}
      </div>
    </div>
  </div>
  <div class="hr-line"></div>
  <div>
    <h3 class="side-bar-title">Dependencies</h3>
    <div class="side-bar-no-dep" v-if="deps.length === 0">No Dependency</div>
    <div
      v-for="dep in deps"
      :key="dep.name"
      class="side-bar-dep-item"
      @click="goNpm(dep.name)"
    >
      <span>{{ dep.name }}</span>
      <span>{{ dep.version }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { inject, ref } from "vue";

const meta = inject<any>("meta");
const deps = computed(() => {
  const depObj = meta.value.deps || {};
  return Object.keys(depObj).map((name) => ({
    name,
    version: depObj[name],
  }));
});

const sizeJs = ref("--");
const sizeCss = ref("--");
const loadingSize = ref(false);

function getSize() {
  if (loadingSize.value) return;
  loadingSize.value = true;
  sizeJs.value = "--";
  sizeCss.value = "--";
  fetch(`/size`)
    .then((res) => res.json())
    .then((res) => {
      loadingSize.value = false;
      sizeJs.value = res.sizeJs;
      sizeCss.value = res.sizeCss;
    });
}

function goNpm(dep: string) {
  window.open(`https://www.npmjs.com/package/${dep}`);
}
</script>
