import axios from 'axios';

const config = {
    baseUrl : 'http://sample.bmaster.kro.kr/'
}

function getContacts(pageNo, pageSize){
    return axios.get(`${config.baseUrl}contacts?pageno=`+pageNo+`&pagesize=`+pageSize)
}

export{
    getContacts
}