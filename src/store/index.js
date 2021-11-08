import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        posts : '',
        getPosts: [],
        // postsCount : '',
    },
    getters : {
        getPosts(state){
            return state.posts;
        },
       
    },
    mutations,
    actions,
})
