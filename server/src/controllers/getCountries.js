const { Country } = require('../db')
const sequelize = require('sequelize')

module.exports = async(req, res) => {
    try {
        const { name } = req.query
        if (name) {
            const countriesFound = await Country.findAll({
                where: {
                    name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + name.toLowerCase() + '%')
                }
            })
            if (countriesFound.length < 1) return res.status(404).send("There aren't countries with that name")
            return res.status(200).json(countriesFound)     
        } else{
            let countriesFound = await Country.findAll()
            
            if(countriesFound.length > 0) return res.status(200).json(countriesFound)
            return res.status(404).send("There aren't countries in the DataBase...")
        }
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
