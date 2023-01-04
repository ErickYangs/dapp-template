import { defineConfig } from "vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import path from "path";
// import vueI18n from "@intlify/unplugin-vue-i18n";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueI18n({
    //   include: path.resolve(__dirname, "./src/locales/**"),
    // }),
    viteCompression(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // 拆分代码，这个就是分包，配置完后自动按需加载，现在还比不上webpack的splitchunk，不过也能用了。
          vue: ['vue', 'vue-router'],
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
      exclude: [
        "node_modules/lodash-es/**",
        "node_modules/@types/lodash-es/**",
      ],
    },
  },
  css: {
    postcss: {
      plugins: [
        // 移除打包element时的@charset警告
        {
          postcssPlugin: "internal:charset-removal",
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === "charset") {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
  },
});
