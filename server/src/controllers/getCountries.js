const data = require('../../api/db.json')
const { Country } = require('../db')

module.exports = async(req, res) => {
    try {
        const { countries } = await data
        const  formattedCountries = countries.map((country) => (
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

        const countriesFound = await Country.findAll()

        if(countriesFound.length > 0) return res.status(200).json(countriesFound)
        return res.status(404).send("There aren't countries in the DataBase...")

    } catch (error) {
        return res.status(500).json(error.message)
    }
}
