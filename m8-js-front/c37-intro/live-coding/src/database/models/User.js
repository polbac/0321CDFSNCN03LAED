module.exports = (sequelize, DataType) => {
    const alias = 'User'
    /* camelCase por default */
    const cols = {  
        name: {
            type: DataType.STRING
        },
        email: {
            type: DataType.INTEGER
        },
        password: {
            type: DataType.BOOLEAN
        },
        image: {
            type: DataType.STRING
        },
    }
    
    const config = {
        underscored: true, /* te busca en snake case las columnas */
        timestamps: false /* no va a buscar las columnas de timestamps */
    }
    
    const UserModel = sequelize.define(alias, cols, config)

    return UserModel
}           