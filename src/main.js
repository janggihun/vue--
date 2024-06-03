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
- 라이브러리 -
router : 페이지 이동
store : 전역변수
Vuex : 새로고침시 데이터가 날라가는 현상을 방지하기 위해서 클라이언트의 local스토리지에 내용저장
axios : RestAPI 요청

- script는 3.4+버전 setup형태로 작성

사용이유 : 
        컴포넌트 임포트시 마크업 태그로 바로 사용 가능
        렌더링 시작전 create단계에 사용한 변수를 mount시에 사용 가능
        코드가 길어질수록 보기 불편한점이 해소되며 기능에 따라 나열가능
        

- router url은 url이라고 명시
- store url은 Store-url이라고 명시

형식 : 1. 변수 , 2. 메소드 , 3. 실행 , 4. 내용
*/
