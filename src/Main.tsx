// 1. 引入vant组件样式
import "vant/lib/index.css";
// 2. 引入自定义组件样式
import "./style.css";
import {createApp} from "vue";
import {createPinia} from 'pinia'
import router from "./route/Router.tsx";

let pinia = createPinia();
createApp({
    render: () => (
        <>
            <router-view/>
        </>
    )
}).use(pinia).use(router).mount("#app");
