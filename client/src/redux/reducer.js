import { GET_COUNTRIES, GET_COUNTRY_BY_ID, GET_ACTIVITIES, POST_ACTIVITY, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, ORDER, ERROR, SET_CURRENT_PAGE } from "./types"

const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    countryDetail: {},
    currentPage: 1,
    errors: false,
    // order: "Default",
    // filterByContinent: "ALL",
    // filterByActivity: "All",
    // defaultOrderedRef: [],
    // filteredByContinent: [],
    // filteredByActivity: [],
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
                    currentPage: 1,
                    errors: false
                }
            }
            return {
                ...state,
                countries: filterByContinent,
                currentPage: 1,
                errors: false
            }
        }
        case FILTER_BY_ACTIVITY: {
            if (action.payload === "All") {
                return {
                    ...state,
                    countries: state.allCountries,
                    currentPage: 1,
                    errors: false
                }
            }
            
            const activityName = action.payload
            const countriesFromActivity = state.activities.find((activity) => activity.name === activityName)
            const countriesAct = countriesFromActivity.Countries
            const countriesFound = state.allCountries.filter((country) => {
                return countriesAct.some((countryAct) => countryAct.name === country.name)
            })

            return {
                ...state,
                countries: countriesFound,
                currentPage: 1,
                errors: false
            }
        }
        case ORDER: {
            const sortFunction = (a, b) => {
                if (action.payload === "A-Z" || action.payload === "Z-A") {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) return "A-Z" === action.payload ? 1 : -1;
                    if(a.name.toLowerCase() < b.name.toLowerCase()) return "Z-A" === action.payload ? 1 : -1;
                } else {
                    if (a.population > b.population) return "Ascending" === action.payload ? 1 : -1;
                    if (a.population < b.population) return "Descending" === action.payload ? 1 : -1;
                }
            }
            
            const countriesCopy = [...state.countries]
            const newCountries = countriesCopy.sort((a, b) => sortFunction(a, b))
            
            if (action.payload === "Default") {
                let allCountriesCopy = [...state.allCountries]
                allCountriesCopy = allCountriesCopy.filter((country) => state.countries.includes(country)) 

                return {
                    ...state,
                    countries: allCountriesCopy,
                    currentPage:1,
                    errors: false
                }
            }
            return {
                ...state,
                countries: newCountries,
                currentPage: 1,
                order: action.payload,
                errors: false
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