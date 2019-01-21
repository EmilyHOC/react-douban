import axios from 'axios';


export function search(name){

    return axios.get(`/v2/movie/search?q=${name}&start=0&count=10`).then((res)=>{
        console.log(res.data)
    }).catch((res)=>{
        console.log(res)
    });
}