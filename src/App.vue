<script setup>
import { onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
onMounted(() => {
  console.log("11111", import.meta.env.VITE_APP_ONTOLOGY_NETWORK);
});
</script>

<template>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
