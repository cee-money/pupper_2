const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating model for Pupper collection's fields
const pupperSchema = new Schema({
  dogName: { type: String, required: true },
  size: { type: String },
  familyFriendly: { type: String },
  energetic: { type: String },
  lazy: { type: String },
  strangerDanger: { type: String },
  dogDanger: { type: String },
  largeDogDanger: { type: String },
  smallDogDanger: { type: String },
  dominant: { type: String },
  doesntShare: { type: String },
  chaser: { type: String },
  wrestler: { type: String },
  allDogFriendly: { type: String },
  ownerFirstName: { type: String },
  ownerLastName: { type: String },
  ownerEmail: { type: String},
  url: { type: String }
});

const Pupper = mongoose.model("Pupper", pupperSchema);

module.exports = Pupper;
