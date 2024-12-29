import { defineComponent, FunctionalComponent, ref, VNode } from "vue";
import { Search as VanSearch, showToast, Col as VanCol, Row as VanRow, Sticky as VanSticky } from "vant";
// 引入模块后自动生效
import "@vant/touch-emulator";
import "./home-style.css";

const WaterSearch = defineComponent({
  setup() {
    let searchText = ref<string>("洗发水");
    const onClickButton = () => showToast(searchText.value);
    return () => (
      <>
        <VanRow>
          <VanCol span={24}>
            <VanSticky>
              <VanSearch
                showAction
                modelValue={searchText.value}
                onUpdate:modelValue={(value) => {
                  searchText.value = value;
                }}
                placeholder="请输入搜索关键词">
                {{
                  "action": () => <div onClick={onClickButton}>搜索</div>
                }}</VanSearch>
            </VanSticky>
          </VanCol>
        </VanRow>
      </>
    );
  }
});

type GoodsInfo = {
  goodsId: number;
  name: String;
  desc: String;
  hostGraphId: number;
  price: number;
}
import noImg from "/shop/no-img.svg";

const GoodsInfoSpan: FunctionalComponent<{ goodsInfo: GoodsInfo }> = (
  props
) => {
  const hostGraphIdToUrl = (hostGraphId: number) => {
    console.warn(`图片ID${hostGraphId}`);
    return noImg;
    //TODO
  };
  const item = props.goodsInfo;
  const imgHeight = 200;
  const element: VNode = <>
    <VanRow>
      <VanCol span={24}
      >
        <img class="rounded-corner-div" style={{
          "min-height": imgHeight + "px"
          , "object-fit": "contain", "width": "100%", "height": "100%"
        }}
             alt={item.name}
             src={hostGraphIdToUrl(item.hostGraphId)} />
      </VanCol>
    </VanRow>
    <VanRow>
      <VanCol span={24} style={{ "font-size": "2rem", "text-align": "left" }}>
        {props.goodsInfo.name}
      </VanCol>
    </VanRow>
    <VanRow>
      <VanCol span={24} style={{ "font-size": "1.5rem", "color": "red", "text-align": "left" }}>
        {"¥" + props.goodsInfo.price}
      </VanCol>
    </VanRow>
  </>;
  return element;
};


const WaterGoodsGrid = defineComponent({
  setup() {
    let more = {
      name: "飘柔洗发水300ml",
      desc: "",
      goodsId: 10004,
      hostGraphId: 20003,
      price: 28.9
    };
    let goodsInfos = ref<GoodsInfo[]>([
      {
        name: "海飞丝洗发水300ml",
        desc: "",
        goodsId: 10001,
        hostGraphId: 20001,
        price: 23.9
      }, {
        name: "海飞丝洗发水100ml",
        desc: "",
        goodsId: 10002,
        hostGraphId: 20002,
        price: 13.9
      }, more, more, more, more, more, more, more
    ]);
    return () => (
      <>
        <VanRow gutter={[10, 10]}>
          {goodsInfos.value.map((item: GoodsInfo, index) => {
            return <VanCol span={12} key={index}>
              <GoodsInfoSpan goodsInfo={item}></GoodsInfoSpan>
            </VanCol>;
          })}
        </VanRow>
      </>
    );
  }
});

const App: FunctionalComponent = () => {
  return (
    <>
      <WaterSearch></WaterSearch>
      <WaterGoodsGrid></WaterGoodsGrid>
    </>);
};
export default App;
