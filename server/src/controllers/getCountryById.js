const { Country, Activity } = require("../db");
const regex3char = /^[a-zA-Z]{3}$/

module.exports = async (req, res) => {
    try {
        const { idPais } = req.params
        if (regex3char.test(idPais)) {
            const countryFound = await Country.findByPk(idPais.toUpperCase(), 
                {
                    include: { 
                        model: Activity,
                        attributes: ["id", "name", "difficulty", "duration", "season"],
                        through: {
                            attributes: []
                        }
                    },
                }
            )
                
            if (!countryFound) return res.status(404).send("Country not found!")
            return res.status(200).json(countryFound)
        }
        return  res.status(500).send("Invalid ID")
    } catch (error) {
        res.status(500).json(error.message)
    }
}