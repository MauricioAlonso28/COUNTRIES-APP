const { Activity, Country } = require("../db");

module.exports = async (req, res) => {
    try {
        const getActivities = await Activity.findAll(
            {
                include: {
                    model: Country,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    }
                }               
            }
        )

        if(getActivities.length > 0) return res.status(200).json(getActivities)
        return res.status(404).send("There aren't activities in the DataBase")
    } catch (error) {
        return res.status(500).json(error.message)
    }
}