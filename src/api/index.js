// import axios from 'axios';
import {getItemsByLimit} from '../aws/query_items';

// const config = {
//     baseUrl : 'http://sample.bmaster.kro.kr/'
// }

// function getPosts(pageNo){
//     return axios.get(`${config.baseUrl}contacts?pageno=`+pageNo+`&pagesize=10`)
// }

async function getPosts(pageNo){
    const data = await getItemsByLimit(pageNo);
    const items = JSON.parse(data).Items;
    console.log(data);
    console.log(JSON.parse(data).Items);
    return items;
}



export{
    getPosts,
    // getPostsCount
}