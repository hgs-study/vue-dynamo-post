import {getContacts} from '../api/index.js';

export default{
    // async GET_CONTACTS({commit}){
    //     const response = await getContacts();
    //     commit('GET_CONTACTS',response.data);
    //     return response;
    // }
    async GET_CONTACTS({commit},page){
        const response = await getContacts(page.pageNo, page.pageSize);
        commit('GET_CONTACTS',response.data);
        return response;
    }
}