const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
// defino el modelo
    sequelize.define('Activity', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        }, 
        duration: {
            type: DataTypes.STRING,
            allowNull: true,
            set(value){
                if(value == 1) return this.setDataValue('duration', `${value} hour`)
                return this.setDataValue('duration', `${value} hours`)
            }
        },
        season: {
            type: DataTypes.ENUM('Spring', 'Summer', 'Fall', 'Winter'),
            allowNull: false
        }
    }, {
        timestamps: false
    });
};