import { defineComponent, Ref, ref } from "vue";
import WaterTabbar from "./first/WaterTabbar.tsx";


const Root = defineComponent({
  setup() {  // 注意：这里的 JSX 实际上会被 Babel 插件转换为 h(...) 调用
    let active: Ref<string> = ref<string>("首页");
    return () => (
      <>
        <WaterTabbar active={active.value} onUpdate={(value) => {
          active.value = value;
        }}>
        </WaterTabbar>
      </>
    );
  }
});
const App = () => (
  <>
    <Root></Root>
  </>
);
export default App;