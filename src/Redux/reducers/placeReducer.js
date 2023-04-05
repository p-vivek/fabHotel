import { ActionTypes } from "../contants/action-types";

const initial_state = {
    locations: [],
    hotels: []
};

const placeReducer = (state = initial_state, action) => {
   
        switch (action.type) {
            case ActionTypes.HOTELS_FETCHED:
                return {...state, hotels: action.payload};
            case ActionTypes.LOCATION_FETCHED:
                return {...state, locations: action.payload};
            case ActionTypes.EMPTY_LIST:
                return {...state, locations: [], hotels: []};
            default:
                return {...state}
        }
};

export default placeReducer;