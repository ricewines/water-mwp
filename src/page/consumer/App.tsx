import {defineComponent, Ref, ref} from "vue";
import WaterTabbar from "./first/WaterTabbar.tsx";
import {consumerPage} from "../../store/PageStatus.tsx";

import linkRef from '../../../res/vite.svg';
//设置页面信息
document.title = 'Consumer'
let link = document.createElement('link');
link.type = 'image/svg+xml';
link.rel = 'icon';
link.href = linkRef;
document.getElementsByTagName('head')[0].appendChild(link);

let search = location.search;
if (search) {
    console.info(`页面参数:${search}`)
}
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
