module.exports = (sequelize, DataType) => {
    const alias = 'Galaxy'
    /* camelCase por default */
    const cols = {
        /* opcional */
        name: {
            type: DataType.STRING
        },

    }
    
    const config = {
        underscored: true, /* te busca en snake case las columnas */
        timestamps: false /* no va a buscar las columnas de timestamps */
    }
    
    const GalaxyModel = sequelize.define(alias, cols, config)

    return GalaxyModel
}           