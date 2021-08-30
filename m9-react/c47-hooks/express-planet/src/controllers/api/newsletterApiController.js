const { Newsletter } = require('../../database/models')

module.exports = {
    async register(req, res) {
        const { email } = req.body
        const userExists = await Newsletter.findOne({
            where: {
                email,
            }
        })
        
        if (userExists) {
            res.json({ success: false, error: 'user_exists' })    
        }

        await Newsletter.create({
            email
        })

        res.json({ success: true })
    }
}