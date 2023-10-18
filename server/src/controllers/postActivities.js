const { Activity } = require("../db");
const sequelize = require('sequelize');

module.exports = async(req, res) => {
    try {
        const { name, difficulty, duration, season, countries } = req.body

        if(!name || !difficulty || !duration || !season || !countries || countries?.length < 1) return res.status(500).send('Missing Data...')
        if (await Activity.findOne({ 
            where: { 
                name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + name.toLowerCase() + '%'),
            }
        })) return res.status(404).send("Activity already exists.")
        
        const countriesFormatted = countries ? countries.map((country) => {
            return country.toUpperCase()
        }) : null

        const durationFormatted = duration.length > 1 ? duration.split('') : duration

        const newActivity = await Activity.create({
            name,
            difficulty,
            duration: durationFormatted[0],
            season
        })
        await newActivity.addCountries(countriesFormatted)
        return res.status(200).send("Activity created successfully!")
    } catch (error) {
        return res.status(500).json(error.message)
    }
}