module.exports = (sequelize, DataTypes) => {
    const name = "Color"
    const columns = {
        name: DataTypes.STRING
    }
    const config = {
        timestamps: false
    }

    const ColorModel = sequelize.define(name, columns, config)

    ColorModel.associate = models => {
        ColorModel.belongsToMany(models.Planet, {
            as: 'planets',
            through: 'color_planet',
            foreignKey: 'color_id', // fk de color dentro de la tabla pivote
            otherKey: 'planet_id',
            timestamps: false, // tabla pivot
        })
    }

    return ColorModel
}