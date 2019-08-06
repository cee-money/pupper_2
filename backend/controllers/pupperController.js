
const db = require("../models");
// const nodemailer = require("nodemailer");
const Sequelize = require("sequelize");
const Op = Sequelize.Op

module.exports = {
    findAll: (req, res) => {
        db.Pupper.findAll({
            where: {
                UserId: {
                    // probably need to change this over to auth0 specific syntax
                    [Op.not]: req.session.passport.user
                },
                size: req.params.size,
                energetic: req.params.energetic,
                dominant: req.params.dominant
            }, include: [db.User]
        }).then(data => res.json(data)).catch(err => res.status(422).json(err))
      },

      findOne: (req, res) => {
        db.Pupper.findAll({
          where: {
            userEmail: req.params.email
          }
        }).then(data => res.json(data)).catch(err => res.status(422).json(err));
      },

      create: (req, res) => {
        db.Pupper.create(req.body)
          .then(dbPup => res.json(dbPup))
          .catch(err => res.status(422).json(err));
      },
    
      update: (req, res) => {
        db.Pupper.update(req.body, {where:  {_id: req.params.id }})
          .then(dbPup => res.json(dbPup))
          .catch(err => res.status(422).json(err));
      },
    
      remove: (req, res) => {
        db.Pupper.destroy({where: {_id: req.params.id }})
          .then(dbPup => res.json(dbPup))
          .catch(err => res.statue(422).json(err));
      }
}