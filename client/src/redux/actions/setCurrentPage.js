import { SET_CURRENT_PAGE } from "../types";

export const setCurrentPage = (pageNum) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: pageNum
    }
}