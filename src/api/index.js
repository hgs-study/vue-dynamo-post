import axios from 'axios';

const config = {
    baseUrl : 'http://sample.bmaster.kro.kr/'
}

function getPosts(pageNo){
    return axios.get(`${config.baseUrl}contacts?pageno=`+pageNo+`&pagesize=10`)
}
// function getPostsCount(){
//     return axios.get(`${config.baseUrl}contacts`);
// }

export{
    getPosts,
    // getPostsCount
}