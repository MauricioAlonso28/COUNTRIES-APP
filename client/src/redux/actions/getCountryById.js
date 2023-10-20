import { GET_COUNTRY_BY_ID, ERROR } from "../types";
import axios from "axios";

const URL_API = "http://localhost:3001/countries/"

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