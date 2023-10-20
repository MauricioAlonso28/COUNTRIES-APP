import { GET_COUNTRIES, ERROR } from "../types";
import axios from 'axios'

const URL_API = 'https://countries-app-backend-b4er.onrender.com/countries'

export const getCountries = (name) => {
    return async (dispatch) => {
        try {
            if(name){
                const { data } = await axios.get(`${URL_API}?name=${name}`)

                return dispatch({
                    type: GET_COUNTRIES,
                    payload: data
                }) 
            }

            const{ data } = await axios.get(URL_API)
            return dispatch({
                type: GET_COUNTRIES,
                payload: data
            }) 
        } catch (error) {
            console.log(error);
            return dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}