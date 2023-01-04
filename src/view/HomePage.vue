<template>
  <div>Home Page {{ account }}
    <el-button @click="handlerChangeAccount">Default</el-button>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useBaseStore } from "../stores/useBaseStore";

const store = useBaseStore();
const { account } = storeToRefs(store);

const handlerChangeAccount = () => {
    account.value = '0x22222222'
}

</script>
