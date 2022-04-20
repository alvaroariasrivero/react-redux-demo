import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from './iceCream/iceCreamReducer';
import beerReducer from "./beer/beerReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    beer: beerReducer
})

export default rootReducer