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
  },
  mutations: {
    setBoardList: function (state, list) {
      const data = list;
      state.boardList = data;
    },
    setUserId: function (state, userId) {
      state.userId = userId;
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
  },
  actions: {},

  plugins: [createPersistedState()],
});
