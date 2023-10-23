import { ERROR, POST_ACTIVITY } from "../types";
import axios from "axios";

const URL_API = "https://countries-app-backend-b4er.onrender.com/activities"

export const postActivity = (activity) => {
    return async (dispatch) => {
        try {
            await axios.post(URL_API, activity)
            alert('Activity created succesfully!')
            return dispatch({
                type: POST_ACTIVITY
            })
        } catch (error) {
            console.log(error);
            alert('Activity already exists...')
            return dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}