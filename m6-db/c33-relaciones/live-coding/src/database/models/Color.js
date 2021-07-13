module.exports = (sequelize, DataTypes) => {
    const name = "Color"
    const columns = {
        name: DataTypes.STRING
    }
    const config = {
        timestamps: false
    }

    const ColorModel = sequelize.define(name, columns, config)

    return ColorModel
}