const express = require("express");
const router = express.Router();

const Feature = require("../models/Features");
const Pricing = require("../models/Pricing");
const Usability = require("../models/Usability");

// Utility function to handle feedback creation
const createFeedback = async (Model, req, res) => {
  const { profile, name, comment } = req.body;
  console.log(req.body);

  if (!profile || !name || !comment) {
    return res.status(400).send({ message: "All fields are required" });
  }

  const feedback = new Model({ profile, name, comment });

  try {
    const savedFeedback = await feedback.save();
    res.status(201).send(savedFeedback);
  } catch (err) {
    res.status(500).send({ message: "Error saving feedback", error: err });
  }
};

// Utility function to handle fetching feedback
const getFeedback = async (Model, res) => {
  try {
    const feedbacks = await Model.find();
    res.status(200).send(feedbacks);
  } catch (err) {
    res.status(500).send({ message: "Error fetching feedback", error: err });
  }
};

// Routes for Features
router.post("/features", (req, res) => createFeedback(Feature, req, res));
router.get("/features", (req, res) => getFeedback(Feature, res));

// Routes for Pricing
router.post("/pricing", (req, res) => createFeedback(Pricing, req, res));
router.get("/pricing", (req, res) => getFeedback(Pricing, res));

// Routes for Usability
router.post("/usability", (req, res) => createFeedback(Usability, req, res));
router.get("/usability", (req, res) => getFeedback(Usability, res));

module.exports = router;
