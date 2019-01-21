import {combineReducers} from "redux";
import {RECEIVE_SEARCH} from "./actiontypes";

const initSearch={
    movie:'大黄蜂'
}
function Search(state=initSearch,action) {
    switch (action.type) {
        case RECEIVE_SEARCH:
            return {...action.data}
        default:
            return state
    }
}
export default combineReducers({
    Search
})