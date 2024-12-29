import {defineComponent,} from "vue";
import {consumerPage} from "../../../../store/PageStatus.tsx";
import {Root} from "../../App.tsx";


const HomePage = defineComponent({
    setup() {  // 注意：这里的 JSX 实际上会被 Babel 插件转换为 h(...) 调用
        consumerPage().switchPage('首页')
        return () => (
            <>
                <Root/>
            </>
        );
    }
});
export default HomePage;
