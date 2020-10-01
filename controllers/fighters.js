const sherdog = require('../utils/sherdog-api/lib/sherdog')
const fightersRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Fighter = require('../models/fighter')
const data = require('../data/fightersArray')

//add list of fighters from own db
const addFighters = async () => {
  for (let i = 0; i < 16; i++) {
    let fighterObj = new Fighter({
      ...data.heavyweights[i],
      weight: 'Heavyweight',
    })
    await fighterObj.save()
  }
}

//get list of fighters
fightersRouter.get('/', (req, res) => {
  Fighter.find({}).then((fighters) => {
    res.json(fighters)
  })
})

//get fighter details
fightersRouter.get('/:name', (req, res) => {
  //sherdog api fetch code
  sherdog.getFighter(req.params.name, (data) => {
    res.json(data)
  })
  //random local fight data (test data)
  /*
    const randomNumber = Math.floor(Math.random() * 100)
    if(randomNumber % 2 === 0){
        res.send(data.fighterA)
    } else {
        res.send(data.fighterB)
    }
    */
})

module.exports = fightersRouter
