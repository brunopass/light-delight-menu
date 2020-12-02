import Axios from "axios"
import { types } from "../types/menuTypes"

export const GetMenuItemsAction = ( opcion ) => async(dispatch) => {

    dispatch({
        type: types.loading
    })

    try{
        const { data } = await Axios.get(`https://light-delight-menu.firebaseio.com/categorias/${opcion}.json`)

        dispatch({
            type: types.traerItems,
            payload: data
        })
    }
    catch{
        dispatch({
            type: types.traerItems,
            payload: eval(`require('../baseMenu.json').${opcion}`)
        })
    }
}