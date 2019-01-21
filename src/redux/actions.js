import {reqSearch} from "../api";
import {RECEIVE_SEARCH} from "./actiontypes";

//同步接收歌曲

const receiveSearch =(name)=>({
    type:RECEIVE_SEARCH
});

export  const receiveData =(name)=>{
    return async dispatch=>{
        const response =await reqSearch(name);
        const result=response;
            //接收成功
            dispatch(receiveSearch(result));
    }
}