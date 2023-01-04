<template>
  <div>
    Home Page {{ account }}
    <el-button @click="handlerChangeAccount">Default</el-button>
    <el-button @click="handlerLinkAccount">Link</el-button>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useBaseStore } from "../stores/useBaseStore";
import { ElNotification } from "element-plus";
import { useI18n } from "vue-i18n";
import {
  getAccounts,
  walletDownLoadLink,
  walletProviders,
  getSigner,
  walletTypes,
} from "../wallets/providers";
const { t } = useI18n();
const store = useBaseStore();
const { account, signer, walletType } = storeToRefs(store);

const handlerChangeAccount = () => {
  account.value = "0x22222222";
};

const handlerLinkAccount = async () => {
  if (typeof window.ethereum === "undefined") {
    return ElNotification.warning({
      title: t("init"),
      message: t("init"),
    });
  }
  const accounts = await getAccounts(walletProviders[walletTypes.metaMask]);
  console.log("account", accounts);
  if (accounts.length <= 0) {
    return;
  }
  account.value = accounts[0];
  walletType.value = walletTypes.metaMask;
};
</script>
