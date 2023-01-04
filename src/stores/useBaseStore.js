import { defineStore } from "pinia";

export const useBaseStore = defineStore('useBaseStore', {
    state: () => {
        return {
            account: '0x1111111111111'
        }
    }
})