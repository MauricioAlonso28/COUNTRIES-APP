export const validation = (activity) => {
    const error = {}
    const name =  /[`@#$%^*+\=\[\]{};\\|<>\/?~'"]/;
    const difficulty = /[`@#$%^*+\=\[\]{};\\|<>\/?~a-zA-Z'"]/;
    const duration = /^[A-Za-z0-9 ]+$/
    const season = /^[a-zA-Z]+$/

    /* NAME VALIDATION */
    if(name.test(activity.name)) {
        error.name = "Name contains invalid characters."
    }
    if(activity.name.length < 5 && activity.name.length > 0) {
        error.name = "Name must be at least five character long."
    }
    if(activity.name.length === 0) {
        error.name = "Name field can't be empty"
    }

    /* DIFFICULTY VALIDATION */
    if(difficulty.test(activity.difficulty)) {
        error.difficulty = "Difficulty contains invalid characters."
    }
    if(activity.difficulty < 1 || activity.difficulty > 5){
        error.difficulty = 'Difficulty should be between 1 and 5.'
    }

    /* DURATION VALIDATION */
    if(!duration.test(activity.duration)) {
        error.duration = "Duration contains invalid characters."
    }
    if(activity.duration.length > 10) {
        error.duration = "Exceeds the maximum allowed characters."
    }
    if(activity.duration.length === 0){
        error.duration = "Duration field can't be empty."
    }

    /* SEASON VALIDATION */
    if(!season.test(activity.season)) {
        error.season = "Season Contains invalid characters."
    }
    if(activity.season.length < 5 && activity.season.length > 0) {
        error.season = "Season must be at least five character long"
    }
    if(activity.season.length === 0) {
        error.season = "Season field can't be empty"
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