const { Router } = require("express");
const Instrument = require("../models").instrument;

const router = new Router();

router.get("/", async (req, res) => {
  const instruments = await Instrument.findAll();
  res.status(200).send({ message: "ok", instruments });
});

module.exports = router;