import { combineReducers } from "redux";
import {product_reducer} from "../components/product/reducer/reducer"

const rootReducer = combineReducers({
    product_reducer,
})

export default rootReducer;