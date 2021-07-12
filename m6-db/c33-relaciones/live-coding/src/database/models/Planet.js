module.exports = (sequelize, DataType) => {
    const alias = 'Planet'
    /* camelCase por default */
    const cols = {
        /* opcional */
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },  
        name: {
            type: DataType.STRING
        },
        diameter: {
            type: DataType.INTEGER,
        },
        hasRings: {
            type: DataType.BOOLEAN
        },
        discovered: DataType.DATE,
        image: {
            type: DataType.STRING
        },
        galaxy_id: DataType.INTEGER,

    }
    
    const config = {
        underscored: true, /* te busca en snake case las columnas */
        timestamps: false /* no va a buscar las columnas de timestamps */
    }
    
    const PlanetModel = sequelize.define(alias, cols, config)

    return PlanetModel
}           