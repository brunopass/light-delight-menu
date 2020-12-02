import { combineReducers } from 'redux'
import menuReducer from './menuReducer'
import itemsReducer from './itemsReducer'

export default combineReducers({
    menuReducer,
    itemsReducer
});