const { Rabbit, Feeding } = require("../models")

const create = async (req, res) => {
    try {
      const rabbit = await Rabbit.create(req.body)
      res.status(200).json(rabbit)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  
  const index = async (req, res) => {
    try {
      const rabbits = await Rabbit.findAll({
        include: [{ model: Feeding, as: "feedings" }],
      })
      res.status(200).json(rabbits)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  const update = async (req, res) => {
    try {
      const rabbit = await Rabbit.findByPk(req.params.id)
      rabbit.set(req.body)
      await rabbit.save()
  
      res.status(200).json(rabbit)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  const deleteRabbit = async (req, res) => {
    try {
     
      const rabbit = await Rabbit.findByPk(req.params.id)
      await rabbit.destroy()
      res.status(200).json(cat)
    } catch (error) {
      res.status(500).json(error)
    }
  }


  const addFeeding = async (req, res) => {
    try {
      // Append a catId to req.body:
      req.body.rabbitId = req.params.id
      const feeding = await Feeding.create(req.body)
      res.status(200).json(feeding)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  
  module.exports = {
    create,
    index,
    update,
    delete:deleteRabbit,
    addFeeding,
  }