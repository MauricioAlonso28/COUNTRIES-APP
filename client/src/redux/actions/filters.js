import { FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, ORDER } from '../types'

export const filterByContinent = (continent) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload : continent
    }
}

export const filterByActivity = (activity) => {
    return {
        type: FILTER_BY_ACTIVITY,
        payload : activity
    }
}

export const order = (order) => {
    return {
        type: ORDER,
        payload : order
    }
}