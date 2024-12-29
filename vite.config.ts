import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import {resolve} from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                demo: resolve(__dirname, "page/demo/index.html"),
                demo1: resolve(__dirname, "page/demo/demo1/index.html"),
                demo2: resolve(__dirname, "page/demo/demo2/index.html"),
                "consumer": resolve(__dirname, "page/consumer/index.html"),
            }
        }
    },
    plugins: [
        vue(),
        vueJsx()
    ],
    server: {
        host: "0.0.0.0",
        port: 8801,
        proxy: {
            "/water": {
                target: "http://localhost:8808"
            }
        }
    }
});
