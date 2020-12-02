import { types } from "../types/menuTypes"

const initialState = {
    error: false,
    loading: false,
    items: []
}

export default (state = initialState, action) => {
    switch(action.type){

        case types.loading:
            return {...state, loading: true}

        case types.error:
            return {...state, error: true}

        case types.traerItems:
            return {
                ...state,
                error: false, 
                loading: false,
                items: action.payload.items,
                title: action.payload.title
            }

        default:
            return state
    }
}