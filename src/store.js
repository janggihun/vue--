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
  getters: {},
  mutations: {
    setBoardList: function (state, list) {
      const data = list;
      state.boardList = data;
    },
    setUserId: function (state, userId) {
      state.userId = userId;
    },
    setPage: function (state, page) {
      state.page = page;
    },
    setPageList: function (state, pageList) {
      state.pageList = pageList;
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
