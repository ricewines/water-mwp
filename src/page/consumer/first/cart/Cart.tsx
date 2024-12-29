import {defineComponent,} from "vue";
import {consumerPage} from "../../../../store/PageStatus.tsx";
import {Root} from "../../App.tsx";


const CartPage = defineComponent({
    setup() {  // 注意：这里的 JSX 实际上会被 Babel 插件转换为 h(...) 调用
        consumerPage().switchPage('购物车')
        return () => (
            <>
                <Root/>
            </>
        );
    }
});
export default CartPage;
