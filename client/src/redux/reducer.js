import { GET_COUNTRIES, GET_COUNTRY_BY_ID, GET_ACTIVITIES, POST_ACTIVITY, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, ORDER, ERROR, SET_CURRENT_PAGE } from "./types"

const initialState = {
    countries: [],
    activities: [],
    countryDetail: {},
    defaultOrderedRef: [],
    order: "Default",
    filterByContinent: "ALL",
    filterByActivity: "All",
    filteredByContinent: [],
    filteredByActivity: [],
    currentPage: 1,
    errors: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_COUNTRIES: {
            return {
                ...state,
                countries: action.payload,
                defaultOrderedRef: [],
                order: "Default",
                filterByContinent: "ALL",
                filterByActivity: "All",
                countryDetail: {},
                currentPage: 1,
                errors: false
            }
        }
        case GET_COUNTRY_BY_ID: {
            return {
                ...state,
                countryDetail: action.payload,
                errors: false
            }
        }
        case GET_ACTIVITIES: {
            return {
                ...state,
                activities: action.payload,
                errors: false
            }
        }
        case POST_ACTIVITY: {
            return {...state}
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        case ERROR: {
            return {
                ...state,
                errors: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default reducer;