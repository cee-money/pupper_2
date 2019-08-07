const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pupSchema = new Schema({
  dogName: { type: String, required: true },
  size: { type: String, default: "Small" },
  familyFriendly: {type: String, default: "Yes"},
  energetic: {type: String, default: "Yes"},
  lazy: {type: String, default: "Yes"},
  strangerDanger: {type: String, default: "Yes"},
  dogDanger: {type: String, default: "Yes"},
  largeDogDanger: {type: String, default: "Yes"},
  smallDogDanger: {type: String, default: "Yes"},
  dominant: {type: String, default: "Yes"},
  doesntShare: {type: String, default: "Yes"},
  chaser: {type: String, default: "Yes"},
  wrestler: {type: String, default: "Yes"},
  allDogFriendly: {type: String, default: "Yes"},
  ownerFirstName: {type: String},
  ownerLastName: {type: String},
  ownerEmail: {type: String},
  url: {type: String, required: true},
});

const Pupper = mongoose.model("Pupper", pupSchema);

module.exports = Pupper;


  