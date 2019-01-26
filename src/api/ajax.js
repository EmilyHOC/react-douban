import axios from 'axios';


// export function search(name){
//
//     return axios.get(`/v2/movie/search?q=${name}&start=0&count=10`).then((res)=>{
//         console.log(res.data)
//     }).catch((res)=>{
//         console.log(res)
//     });
// }
export function searchHotmovie() {
    return axios.get('/v2/movie/in_theaters?city=北京&start=0&count=6')
}
export function searchComingmovie() {
    return axios.get('/v2/movie/coming_soon?start=0&count=6')
}