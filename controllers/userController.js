const User = require('../models/user')
const {comparePassword} = require('../helpers/bcrypt')
const {sign} = require('../helpers/jwt')

class UserController{
    static register(req, res, next){
        const {email, password} = req.body
        const newUser = {email, password}

        User.create(newUser)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(next)
    }

    static login(req, res, next){
        const {email, password} = req.body
        
        User.findOne({email : email})
        .then(found => {
            if(comparePassword(password, found.password)){
                let user = {
                    id : found.id,
                    email : found.email
                }

                let token = sign(user)
                res.status(200).json({data: found, token})
            } else {
                throw {
                    code : 400,
                    message : `email/password wrong`
                }
            }
        })
        .catch(next)
    }
}

module.exports = UserController