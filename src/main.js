import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { store } from "./store.js";
import Vuex from "vuex";

axios.defaults.baseURL = "http://localhost:8080";

const app = createApp(App);
app.config.globalProperties.$store = store;
app.config.globalProperties.axios = axios;
app.config.globalProperties.$router = router;
app.use(router).mount("#app");
app.use(store);
app.use(Vuex);

/* 
 ============================= 라이브러리 ========================================== 
router ,store,Vuex ,axios 
 ============================= setup ========================================== 
- script는 3.4+버전 setup형태로 작성
 ============================= url ========================================== 
- 자식 컴포넌트에서 Store-url 변경시 현재 컴포넌트에서 리렌더링을 실행
    : url 노출을 막기 위해 내부적으로 url을 조정하여 컴포넌트 별로 렌더링 실행 (컴포넌트 재활용 및 메모리 관리)
 ============================= css ========================================== 
공통 css 관리 - ./style/css_global.css 
-============================================================================
*/
