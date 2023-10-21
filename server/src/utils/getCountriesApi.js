const axios = require('axios')
const { Country } = require('../db')

const getCountriesApi = async () => {
    try {
        const exisitingCountries = await Country.findAll()
        if (exisitingCountries.length > 0) {
            console.log("Countries already exist in the Database!");
            return ":("
        }
        const response = await axios.get(`http://localhost:5000/countries`)
        const countries = await response.data

        const formattedCountries = await countries.map((country) => (
            {
                id: country.cca3,
                name: country.name.common,
                flag: country.flags.png,
                continent: country.continents ? country.continents[0] : undefined,
                capital: country.capital ? country.capital[0] : `It doesn't have a Capital`,
                subregion: country.subregion ? country.subregion : "It doesn't have a Subregion",
                area: country.area,
                population: country.population,
            }
        ))
        await Country.bulkCreate(formattedCountries)
        console.log("Countries created succesfully...!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = getCountriesApi