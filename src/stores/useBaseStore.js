import { defineStore } from "pinia";
import { computed, ref, toRefs, watch } from "vue";
import { walletProviders, getSigner } from "../wallets/providers";
export const useBaseStore = defineStore("useBaseStore", () => {
  const account = ref("");
  const walletType = ref("");

  const signer = computed(() => {
    if (!walletType.value) {
      return undefined;
    }
    return getSigner(walletProviders[walletType.value]);
  });

  return {
    account,
    walletType,
    signer,
    persist: true
  };
});
