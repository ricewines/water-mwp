import {defineComponent} from "vue";
import {Cell as VanCell, Row as VanRow, Col as VanCol, NavBar, Button as VanButton} from "vant";
import router from "../../../../route/Router.tsx";
import "./SettingStyle.css"

export default defineComponent({
    setup() {
        const onLogout = () => {
            console.warn("注销登录")
        }
        return () => (
            <>
                <VanRow>
                    <VanCol span={24}>
                        <NavBar title="设置">
                            {/*   {{
                                right: () => <VanIcon name="search" size="18"></Icon>
                            }}*/}
                        </NavBar>
                        <VanCell is-link title="关于" onClick={() => {
                            return router.push({name: '关于'})
                        }}/>
                        {/*                        <VanCell is-link title="模版" onClick={() => {
                            return router.push({name: 'demo'})
                        }}/>*/}
                        <VanCell style="text-align: center;">
                            <VanButton type="danger" onClick={() => {
                                return onLogout();
                            }}>退出登录</VanButton>
                        </VanCell>
                    </VanCol>
                </VanRow>
            </>
        );
    }
});
