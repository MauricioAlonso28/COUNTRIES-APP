import { GET_COUNTRIES, GET_COUNTRY_BY_ID, GET_ACTIVITIES, POST_ACTIVITY, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, ORDER, ERROR, SET_CURRENT_PAGE } from "./types"

const initialState = {
    countries: [],
    allCountries: [],
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
                allCountries: action.payload,
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
        case FILTER_BY_CONTINENT: {
            const filterByContinent = state.allCountries.filter((country) => country.continent === action.payload)
            if (action.payload === "All") {
                return {
                    ...state,
                    countries: state.allCountries,
                    errors: false
                }
            }
            return {
                ...state,
                countries: filterByContinent,
                errors: false
            }
        }
        case FILTER_BY_ACTIVITY: {
            const activityName = action.payload
            const filterByName = state.allCountries.filter((country) => {
                if (country.Activities.length > 0) {
                    country.Activities.some((activity) => activity.name === activityName)
                }
            })
            if (action.payload === "All") {
                return {
                    ...state,
                    countries: state.allCountries,
                    errors: false
                }
            }
            return {
                ...state,
                countries: filterByName,
                errors: false
            }
        }
        case ORDER: {
            if (action.payload === "Default") {
                return {
                    ...state,
                    countries: state.allCountries,
                    errors: false
                }
            }
            return {
                ...state
            }
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