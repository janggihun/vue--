import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
/*
전역변수 

boardList : 게시판 리스트
pageList : 페이징 리스트
page : 현재 페이지
boardInfo : boardList의 n번째 맵
count : 행수
userId : 로그인아이디
now : 현재 게시글번호
url : 내부 url
cnt : ?
fileList : 첨부파일 리스트



 */

export const store = new Vuex.Store({
  state: {
    boardList: [],
    pageList: [],
    page: {},
    boardInfo: {},
    count: 10,
    userId: "",
    now: "",
    url: "",
    cnt: "",
    fileList: [],
  },
  getters: {
    getBoardList: (state) => {
      return state.boardList;
    },
    getPageList: (state) => {
      return state.pageList;
    },
    getPage: (state) => {
      return state.page;
    },
    getUserId: (state) => {
      return state.userId;
    },
    getCnt: (state) => {
      return state.cnt;
    },
    getBoardInfo: (state) => {
      return state.boardInfo;
    },
    getfileList: (state) => {
      return state.fileList;
    },
  },
  mutations: {
    setBoardList: function (state, list) {
      const data = list;
      state.boardList = data;
    },
    setUserId: function (state, userId) {
      const data = userId;
      state.userId = data;
    },
    setPage: function (state, page) {
      const data = page;
      state.page = data;
    },
    setPageList: function (state, pageList) {
      const data = pageList;
      state.pageList = data;
    },
    setBoardInfo: function (state, boardInfo) {
      const data = boardInfo;
      state.boardInfo = data;
    },
    setNow: function (state, now) {
      state.now = now;
    },
    setUrl: function (state, url) {
      const data = url;
      state.url = data;
    },
    setCnt: function (state, cnt) {
      const data = cnt;
      state.cnt = data;
    },
    setFileList: function (state, fileList) {
      const data = fileList;
      const tmp = state.fileList.map((el) => el);
      tmp.push(data);
      state.fileList = tmp;
    },
    resetFileList: function (state, fileList) {
      fileList;
      let tmp = [];
      state.fileList = tmp;
    },
    removeFileList: function (state, index) {
      state.fileList.splice(index, 1);
      let tmp = state.fileList.map((el) => el);
      state.fileList = tmp;
    },
  },
  actions: {},

  plugins: [createPersistedState()],
});
