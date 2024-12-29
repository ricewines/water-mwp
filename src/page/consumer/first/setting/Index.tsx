import {defineComponent} from "vue";
import {Cell as VanCell, Row as VanRow, Col as VanCol, NavBar, Icon} from "vant";
import {settingPage} from "../../../../store/SettingStatus.tsx";
import {consumerPage} from "../../../../store/PageStatus.tsx";
import router from "../../Router.tsx";

export default defineComponent({
    setup() {
        return () => (
            <>
                <VanRow>
                    <VanCol span={24}>
                        <NavBar title="设置">
                            {{
                                right: () => <Icon name="search" size="18"></Icon>
                            }}
                        </NavBar>
                        <VanCell is-link title="关于" onClick={() => {
                            settingPage().switchPage('关于');
                            consumerPage().switchPage('设置');
                            return router.push({path: '/about'})
                        }}/>
                        <VanCell is-link title="模版" onClick={() => {
                            return router.push({path: '/demo'})
                        }}/>
                    </VanCol>
                </VanRow>
            </>
        );
    }
});
