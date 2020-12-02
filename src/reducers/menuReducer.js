import { types } from '../types/menuTypes'

const INITIAL_STATE = {
    opciones:[],
    error: false,
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.error:
            return {...state, error: true}

        case types.loading:
            return {...state, loading: true}

        case types.traerOpciones:
            return {
                ...state,
                opciones: action.payload,
                error: false,
                loading: false
            }
        
        

        default:
            return state
    }
}