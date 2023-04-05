import { combineReducers } from "redux";
import placeReducer from "./placeReducer";


const rootReducer = combineReducers({
    places:placeReducer
})

export default rootReducer
