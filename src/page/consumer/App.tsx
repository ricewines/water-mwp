import {defineComponent, Ref, ref} from "vue";
import WaterTabbar from "./first/WaterTabbar.tsx";
import {consumerPage} from "../../store/PageStatus.tsx";

document.title = 'Consumer'
const Root = defineComponent({
    setup() {  // 注意：这里的 JSX 实际上会被 Babel 插件转换为 h(...) 调用
        let content = consumerPage().getContent();
        let active: Ref<string> = ref<string>(content);
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
export {App, Root};
