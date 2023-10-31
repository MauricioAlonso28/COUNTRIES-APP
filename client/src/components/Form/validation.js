export const validation = (activity) => {
    const error = {}
    const name =  /[`@#$%^*+\=\[\]{};\\|<>\/?~'"\s]/;

    /* NAME VALIDATION */
    if(name.test(activity.name)) {
        error.name = "Name contains invalid characters."
    }
    if(activity.name.length > 40) {
        error.name = "Name must be less than 40 characters."
    }
    if(activity.name.length === 0) {
        error.name = "Name field can't be empty"
    }

    /* DIFFICULTY VALIDATION */
    if(activity.difficulty < 1 || activity.difficulty > 5){
        error.difficulty = 'Difficulty should be between 1 and 5.'
    }

    /* DURATION VALIDATION */
    if(activity.duration.length === 0){
        error.duration = "The duration must have at less one hour."
    }

    /* SEASON VALIDATION */
    if(activity.season.length === 0) {
        error.season = "Choose one season of the year."
    }

    /* COUNTRIES VALIDATION */
    if(activity.countries.length === 0){
        error.countries = "Must be at least one country selected"
    }
    if(activity.countries.length > 10){
        error.countries = "Exceeds the maximum allowed selected countries per activity"
    }
    return error
}