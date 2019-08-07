const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Pupper.find({
                size: req.params.size,
                energetic: req.params.energetic,
                dominant: req.params.dominant,
                ownerEmail: { $ne: req.body.user.email } 
        }).then(data => res.json(data)).catch(err => res.status(422).json(err))
      },

      findOne: (req, res) => {
        db.Pupper.find({
          where: {
            ownerEmail: req.body.user.email
          }
        }).then(data => res.json(data)).catch(err => res.status(422).json(err));
      },

      create: (req, res) => {
        db.Pupper.create(req.body)
          .then(dbPup => res.json(dbPup))
          .catch(err => res.status(422).json(err));
      },
    
      update: (req, res) => {
        db.Pupper.findOneAndUpdate(req.body, {where:  {_id: req.params.id }})
          .then(dbPup => res.json(dbPup))
          .catch(err => res.status(422).json(err));
      },
    
      remove: (req, res) => {
        db.Pupper.findById({_id: req.params.id })
          .then(dbPup => dbPup.remove())
          .then(dbPup => res.json(dbPup))
          .catch(err => res.statue(422).json(err));
      }
}
