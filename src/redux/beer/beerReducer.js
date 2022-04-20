import { BUY_BEER } from "./beerTypes";

const initialState = {
    numOfBeers: 35
}

const beerReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_BEER: return {
            ...state,
            numOfBeers: state.numOfBeers - 1
        }

        default: return state
    }
}

export default beerReducer;