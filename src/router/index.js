import Vue from 'vue';
import VueRouter from 'vue-router';
import PostList from '../components/post/postList.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/posts',
            component : PostList
        }
    ]
})