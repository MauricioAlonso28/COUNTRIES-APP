import { ERROR, POST_ACTIVITY } from "../types";
import axios from "axios";

const URL_API = "http://localhost:3001/activities"

export const postActivity = (activity) => {
    return async (dispatch) => {
        try {
            await axios.post(URL_API, activity)
            return dispatch({
                type: POST_ACTIVITY
            })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}