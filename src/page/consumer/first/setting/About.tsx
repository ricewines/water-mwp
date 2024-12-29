// 1. 引入vant组件样式
import "vant/lib/index.css";
// 2. 引入自定义组件样式
import "../../../../style.css"
import {defineComponent} from "vue";
import packageConfig from "../../../../../package.json"

import {NavBar as VanNavBar} from 'vant';
import {consumerPage} from "../../../../store/PageStatus.tsx";
import {settingPage} from "../../../../store/SettingStatus.tsx";
import router from "../../Router.tsx";
// 创建服务器，或通过 configureServer 钩子来获取
const About = defineComponent({
    setup() {
        const version: string = packageConfig.version
        const copyright: string = packageConfig.author.name;
        return () => (
            <>
                <VanNavBar
                    title="关于"
                    left-arrow
                    onClickLeft={() => {
                        settingPage().switchPage('')
                        consumerPage().switchPage('设置')
                        return router.push({path: '/page/consumer/index.html'})
                    }}

                />
                <div>当前版本:{version}</div>
                <div>© 版权所有：{copyright}</div>
            </>
        );
    }
});

export default About;

