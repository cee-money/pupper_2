const db = require("../models");

module.exports = {
    findMatches: (req, res) => {
      console.log(req.params)
        db.Pupper.find({
          ownerEmail: {
              $ne: req.params.email
            },
          size: req.params.size,
          energetic: req.params.energetic,
          dominant: req.params.dominant
        })
          .then(data => console.log(data))
            // res.json(data))
          .catch(err => res.status(422).json(err))
      },

      find: (req, res) => {
        db.Pupper.find({ ownerEmail: req.params.email })
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err));
      },

      create: (req, res) => {
        db.Pupper.create(req.body)
          .then(dbPup => res.json(dbPup))
          .catch(err => res.status(422).json(err));
      },
    
      update: (req, res) => {
        db.Pupper.findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbPup => res.json(dbPup))
          .catch(err => res.status(422).json(err));
      },
    
      remove: (req, res) => {
        db.Pupper.findById({ _id: req.params.id })
          .then(dbPup => dbPup.remove())
          .then(dbPup => res.json(dbPup))
          .catch(err => res.statue(422).json(err));
      }
};