import {combineReducers} from "redux";
import {RECEIVE_HOTMOVIE,RECEIVE_COMINGMOVIE} from "./actiontypes";
import update from 'react-addons-update';

const initSearch={
    moviedata:[{
        name:'',
        id:'',
        score:'',
        imgUrl:''
    }]
}
function Search(state=initSearch,action) {
    switch (action.type) {
        case RECEIVE_HOTMOVIE:
            var newData=update(initSearch,{$merge:{moviedata: action.data.map((item)=>({name:item.title,id:item.id,score:item.rating.average,imgUrl: item.images.small}))}})
            return newData;
        default:
            return state
    }
}
const initComing={
    comingmoviedata:[{
        name:'',
        id:'',
        imgUrl:''
    }]
}
function Coming(state=initComing,action) {
    switch (action.type) {
        case RECEIVE_COMINGMOVIE:
            console.log(action.data)
            var newData1=update(initComing,{$merge:{comingmoviedata: action.data.map((item)=>({name:item.title,id:item.id,imgUrl: item.images.small}))}})
            return newData1;
        default:
            return state
    }
}
export default combineReducers({
    Search,Coming
})