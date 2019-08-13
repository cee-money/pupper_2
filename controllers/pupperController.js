const db = require("../models");

module.exports = {

  // Get all profiles not associated with an email address that meet certain query parameters
  findMatches: (req, res) => {
    console.log(req.query);
    db.Pupper.find({
      ownerEmail: {
        $ne: req.query.email
      },
      size: req.query.size,
      energetic: req.query.energetic,
      dominant: req.query.dominant
    })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  // Get all profiles associated with one (owner) email address
  find: (req, res) => {
    db.Pupper.find({
      ownerEmail: req.params.email
    })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  // Create profile in Mongo
  create: (req, res) => {
    db.Pupper.create(req.body)
      .then(dbPup => res.json(dbPup))
      .catch(err => res.status(422).json(err));
  },

  // Update a profile in Mongo
  update: (req, res) => {
    db.Pupper.findOneAndUpdate({ _id: req.params.id }, {$set: req.body})
      .then(dbPup => res.json(dbPup))
      .catch(err => res.status(422).json(err));
  },

  // Remove a profile in Mongo
  remove: (req, res) => {
    db.Pupper.findById({ _id: req.params.id })
      .then(dbPup => dbPup.remove())
      .then(dbPup => res.json(dbPup))
      .catch(err => res.statue(422).json(err));
  }
};
