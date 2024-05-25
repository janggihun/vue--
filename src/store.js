import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

export const store = new Vuex.Store({
  state: {
    boardList: [],
    pageList: [],
    page: {},
    tmpMap: {},
    count: 10,
    userId: "",
    now: "",
    url: "",
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
    setTmpMapList: function (state, tmpMap) {
      state.tmpMap = tmpMap;
    },
    setNow: function (state, now) {
      state.now = now;
    },
    setUrl: function (state, url) {
      const data = url;
      state.url = data;
    },
  },
  actions: {},

  plugins: [createPersistedState()],
});
