const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  ownerFirstName: { type: String, required: true },
  ownerLastName: { type: String, required: true },
  ownerEmail: { type: String, required: true },
  url: { type: String, required: true }
});

const Pupper = mongoose.model("Pupper", pupperSchema);

module.exports = Pupper;
