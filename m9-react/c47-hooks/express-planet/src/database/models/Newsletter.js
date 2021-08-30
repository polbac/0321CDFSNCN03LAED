module.exports = (sequelize, DataTypes) => {
    const name = "Newsletter"
    const columns = {
        email: DataTypes.STRING
    }
    const config = {
        timestamps: false,
        tableName: 'newsletter'
    }

    const NewsletterModel = sequelize.define(name, columns, config)

   

    return NewsletterModel
}