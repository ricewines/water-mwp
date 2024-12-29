import {defineComponent, ref, Transition,} from "vue";
import {consumerPage} from "../../../store/PageStatus.tsx";

import "./demo-style.css"

const Demo = defineComponent({
    setup() {  // 注意：这里的 JSX 实际上会被 Babel 插件转换为 h(...) 调用
        consumerPage().switchPage('模版')
        const show = ref<boolean>(false);
        return () => (
            <>
                <button onClick={() => {
                    show.value = !show.value
                }}>Toggle
                </button>
                <Transition name="fade">
                    {show.value ? <p>hello</p> : ""}
                </Transition>
            </>
        );
    }
});
export default Demo;
