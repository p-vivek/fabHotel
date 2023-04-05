import { ActionTypes } from "../contants/action-types";
export const setHotels= (data)=>{
return{
    type:ActionTypes.HOTELS_FETCHED,
    payload:data
}
}
export const setLocation=(data)=>{
return{
    type:ActionTypes.LOCATION_FETCHED,
    payload:data
}
}
export const setEmpty=()=>{
return{
    type:ActionTypes.EMPTY_LIST,
    
}
}