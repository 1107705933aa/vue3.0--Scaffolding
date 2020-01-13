import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";


Vue.use(Vuex);

// 在生产者（-S）环境下，服务器工具、构建脚本、客户端library的行为；
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    strict: debug,
})