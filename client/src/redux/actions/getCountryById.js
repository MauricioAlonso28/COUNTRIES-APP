import { GET_COUNTRY_BY_ID, ERROR } from "../types";
import axios from "axios";

const URL_API = "https://countries-app-backend-b4er.onrender.com/countries/"

export const getCountryById = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL_API}${id}`)

            return dispatch({
                type: GET_COUNTRY_BY_ID,
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