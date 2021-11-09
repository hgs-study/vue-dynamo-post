import {getPosts} from '../api/index.js';

export default{
    async GET_POSTS({commit}, pageNo){
        const response = await getPosts(pageNo);
        commit('GET_POSTS',response);
        return response;
    }

    // async GET_POSTS({commit}, pageNo){
    //     const response = await getPosts(pageNo);
    //     commit('GET_POSTS',response.data);
    //     return response;
    // },


    // async GET_POSTS_COUNT({commit}){
    //     const response = await getPostsCount();
    //     commit('GET_POSTS_COUNT', response.data.totalcount);
    //     return response;
    // }
}