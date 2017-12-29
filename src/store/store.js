import Vue from 'vue'
import Vuex from 'vuex';

import groceryList from './modules/groceryList';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        groceryList
    }
})