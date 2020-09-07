const { Router } = require("express");
const auth = require("../auth/middleware");
const Listing = require("../models").listing;

const router = new Router();

router.get("/", async (req, res) => {
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  const listings = await Listing.findAndCountAll({
    limit,
    offset
  });
  res.status(200).send({ message: "ok", listings });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  console.log("ID:", id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Listing id is not a number" });
  }

  const listing = await Listing.findByPk(id);
  console.log("LISTING:", listing)

  if (listing === null) {
    return res.status(404).send({ message: "Listing not found" });
  }

  const listingDetails = listing
  res.status(200).send({ message: "ok", listingDetails});
});

module.exports = router;