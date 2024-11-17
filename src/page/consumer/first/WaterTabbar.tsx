import { defineComponent, Ref, ref } from "vue";
import { showToast, Tabbar, TabbarItem } from "vant";
import Classification from "./classification/Index.tsx";
import Cart from "./cart/Index.tsx";
import Setting from "./setting/Index.tsx";
import Home from "./home/Index.tsx"

const WaterTabbar = defineComponent({
  props: {
    active: String
  },
  emits: ["update"],
  setup(props, { emit }) {
    let active: Ref<String> = ref<String>(props.active as String);
    return () => (
      <>
        {active.value === "首页" ? <Home></Home> : null}
        {active.value === "分类" ? <Classification></Classification> : null}
        {active.value === "购物车" ? <Cart></Cart> : null}
        {active.value === "设置" ? <Setting></Setting> : null}
        <Tabbar modelValue={active.value} onUpdate:modelValue={(value) => {
          active.value = value;
          emit("update", active.value);
        }} onChange={(index) => showToast(`标签 ${index}`)}>
          <TabbarItem icon="home-o" name="首页">首页</TabbarItem>
          <TabbarItem icon="search" name="分类">分类</TabbarItem>
          <TabbarItem icon="friends-o" name="购物车">购物车</TabbarItem>
          <TabbarItem icon="setting-o" name="设置">设置</TabbarItem>
        </Tabbar>
      </>
    );
  }
});
export default WaterTabbar;