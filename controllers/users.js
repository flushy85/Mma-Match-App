const User = require('../models/user')
const Fighter = require('../models/fighter')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const usersRouter = require('express').Router()

//check authorization
const getTokenFrom = (req) => {
    const authorization = req.get('authorization')
    if(authorization && authorization.toLowerCase().startsWith('bearer ')) {
        
        return authorization.substring(7)
        
    }
    return null
}

//create user
usersRouter.post('/', async (req, res) => {
    const body = req.body
    if(body.username === undefined){
        return res.status(400).json({error: 'username missing'})
    }
    if(body.username === undefined){
        return res.status(400).json({error: 'username missing'})
    }
    if(body.password === undefined || body.password.length < 5){
        return res.status(400).json({error: 'password missing or too short'})
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
        name: body.name,
        username: body.username,
        passwordHash,
    })

    const savedUser = await user.save()
    res.json(savedUser)
})


//get all users from DB
usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users.map(u => u.toJSON()))
})

//get one user
usersRouter.get('/:id', async (request, response) => {
    const user = await User.findById(request.params.id).populate('favorites')
    response.json(user.toJSON())
})

//add fighter to favorites
usersRouter.post('/:id', async (req, res) => {
    const fighterId = req.params.id
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    
    if(!token || !decodedToken.id){
        return res.status(401).json({ error: 'token missing or invalid' })
    }
    
    const fighter = await Fighter.findById(fighterId)
    const updatedUser = await User.findByIdAndUpdate(decodedToken.id, { $push: { favorites: fighter._id} }, {new: true}).populate('favorites')
    res.status(201)
    res.json(updatedUser.toJSON())

})

//remove fighter from favorites
usersRouter.delete('/:id', async (req, res) => {
    const fighterId = req.params.id
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    
    if(!token || !decodedToken.id){
        return res.status(401).json({ error: 'token missing or invalid' })
    }
    const fighter = await Fighter.findById(fighterId)
    const updatedUser = await User.findByIdAndUpdate(decodedToken.id, { $pull: { favorites: fighter._id} }, {new: true}).populate('favorites')
    res.status(201)
    res.json(updatedUser.toJSON())
})

module.exports = usersRouter