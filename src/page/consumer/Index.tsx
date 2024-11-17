// 1. 引入vant组件样式
import "vant/lib/index.css";
// 2. 引入自定义组件样式
import "../../style.css";
import { createApp } from "vue";
import App from "./App.tsx";


createApp({
  render: () => (
    <>
      <App></App>
    </>
  )
}).mount("#app");