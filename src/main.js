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

router : 페이지 이동
store : 전역변수
Vuex : 새로고침시 데이터가 날라가는 현상을 방지하기 위해서 클라이언트의 로컬스토리지에 내용 저장
axios : RestAPI 요청

 ============================= setup ========================================== 

- script는 3.4+버전 setup형태로 작성

이유 : 
    컴포넌트 임포트시 마크업 태그로 바로 사용 가능
    렌더링 시작전 create단계에 사용한 변수를 mount시에 사용 가능
    코드가 길어질수록 보기 불편한 점이 해소되며 기능에 따라 나열가능

 - vue 3.4+버전에서 watch는 지양하고 computed를 쓰는것을 권고하여 리렌더링은 computed를 사용     

 - 모든 컴포넌트 상단에는 해당 컴포넌트에서 사용되는 변수에 대해서 명시

 - 리렌더링 추적이 가능하게 하기 위해 상황에 따라 get메소드를 사용

 ============================= url ========================================== 

- router url은 url이라고 명시

- store url은 Store-url이라고 명시

- 자식 컴포넌트에서 Store-url 변경시 현재 컴포넌트에서 리렌더링을 실행

    : url 노출을 막기 위해 내부적으로 url을 조정하여 컴포넌트 별로 렌더링 실행 (컴포넌트 재활용 및 메모리 관리)

 ============================= 형식 ========================================== 

- 형식 : 1. 매개변수 , 2. 메소드 , 3. 실행 , 4. 내용

    (전역변수는 공통되는 부분이 많아 제외)

 ============================= css ========================================== 

모든 스타일은 스코프를 통해서 컴포넌트간의 css의 중첩상황을 제거

공통 css 관리 - ./style/css_global.css 
-============================================================================
*/
