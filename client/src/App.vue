<template>
  <router-view />
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import { listenBuildEvents } from "./build-event-listener";

const meta = ref<any>({});
provide("meta", meta);

const docHtml = ref<{ ts: number; text: string }>({ ts: 0, text: "" });
provide("docHtml", docHtml);

const propTypes = ref<any>({});
provide("propTypes", propTypes);

async function fetchMeta() {
  const res = await fetch("/meta")
    .then((res) => res.json())
    .then((meta) => meta);
  meta.value = res;
}

async function fetchDocHtml() {
  const html = await fetch("/doc/index.html").then((res) => res.text());

  docHtml.value = {
    ts: Date.now(),
    text: html,
  };
}

async function fetchPropTypes() {
  const { name, version } = meta.value;
  const res = await fetch(`/@hyper.fun/${name}@${version}/hfc.props.json`).then(
    (res) => res.json()
  );

  propTypes.value = res;
}

fetchMeta().then(() => {
  fetchDocHtml();
  fetchPropTypes();
  listenBuildEvents((data) => {
    if (document.hidden) return;
    if (data.action === "update-hfc-markdown") {
      fetchDocHtml();
    } else if (data.action === "update-hfc-props") {
      fetchPropTypes();
    } else if (data.action === "rebuild-complete") {
      fetchDocHtml();
    }
  });
});
</script>
