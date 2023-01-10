import { fileURLToPath, URL } from "node:url";
// import ViteComponents, { AntDesignVueResolver } from 'unplugin-vue-components';
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ViteComponents({
    //   customComponentResolvers: [AntDesignVueResolver()],
    // }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
     options: {
       lessOptions: {
         modifyVars: {
           'primary-color': '#1DA57A',
           'link-color': '#1DA57A',
           'border-radius-base': '2px',
         },
         javascriptEnabled: true,
       }
     },
    }],
    // ...other rules
  }],
});
