const express = require("express");
const router = express.Router();
const app = express();
const data = require("../models/models");

router.get("/", async (req, res) => {
  const alldata = await data.find();
  res.json(alldata);
});

router.post("/", async (req, res) => {
  const body = req.body;
  const newdata = await new data(body);
  newdata.save();
  res.json(newdata);
});

router.put("/:id", async (req, res) => {
  const updata = await data.findByIdAndUpdate(req.params.id, req.body);
  res.json(updata);
});

router.delete("/:id", async (req, res) => {
  const deldata = await data.findOneAndDelete({ _id: req.params.id });
  res.json(deldata);
});

module.exports = router;
