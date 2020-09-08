const { Router } = require("express");
const Style = require("../models").style;

const router = new Router();

router.get("/", async (req, res) => {
  const styles = await Style.findAll();
  res.status(200).send({ message: "ok", styles });
});

module.exports = router;