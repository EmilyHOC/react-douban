import {searchHotMovie,searchComingMovie} from "../api";
import {RECEIVE_HOTMOVIE,RECEIVE_COMINGMOVIE} from "./actiontypes";



//同步接收影院热映
const receiveHotMovie =(movie)=>({
    type:RECEIVE_HOTMOVIE,
    data:movie
});
const receiveComingMovie =(movie)=>({
    type: RECEIVE_COMINGMOVIE,
    data: movie
})


//发送热门电影的异步请求
export const getHotMovie =()=>{
    return async dispatch=>{
        const response=await searchHotMovie();
        const result=response.data;
        dispatch(receiveHotMovie(result.subjects))
    }
}
//发送即将上映的热门请求
export const getComingMovie =()=>{
    return async dispatch =>{
        const response = await searchComingMovie();
        console.log(response);
        const result=response.data;
        console.log(result)
        dispatch(receiveComingMovie(result.subjects))
    }
}