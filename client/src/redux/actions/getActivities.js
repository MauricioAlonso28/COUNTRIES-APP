import { GET_ACTIVITIES, ERROR } from "../types";
import axios from "axios";

const URL_API = 'https://countries-app-backend-b4er.onrender.com/activities'

export const getActivities = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(URL_API)

            return dispatch({
                type: GET_ACTIVITIES,
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