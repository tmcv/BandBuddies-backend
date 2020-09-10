const { Router } = require("express");
const auth = require("../auth/middleware");
const Listing = require("../models").listing;
const Style = require("../models").style;
const Instrument = require("../models").instrument;
const ListingStylesJoinTable = require("../models").joinTableListingStyle;
const ListingInstrumentsJoinTable = require("../models").joinTableListingInstrument;

const router = new Router();

router.post("/", auth, async (req, res) => {
  const user = req.user.dataValues;
  console.log("USER", user)
  const { title, minimumLevel, isBand, description, style, instrument } = req.body;
  console.log("BODY", req.body)
  if (!title || !description || !minimumLevel || !style || typeof isBand !== "boolean" ) {
    return res.status(400).send("Please provide details for every category");
  }

  const newListing = await Listing.create({
    title,
    description,
    minimumLevel,
    isBand,
    userId: user.id
  })

  try {
    const newListingStyleJoin = await ListingStylesJoinTable.create({
      styleId: style,
      listingId: newListing.id
    })

    const newListingInstrumentJoin = await ListingInstrumentsJoinTable.create({
      instrumentId: instrument,
      listingId: newListing.id
    })

    const listingStyle = await Style.findOne({where: {id: newListingStyleJoin.styleId}})

    const listingInstrument = await Instrument.findOne({where: {id: newListingInstrumentJoin.instrumentId}})


    return res.status(201).send({ message: "Listing created successful", newListing, listingStyles: [listingStyle], listingInstruments: [listingInstrument] });
  } catch (error) {
    console.log("ERROR:", error)
    return res.status(400).send({ message: "Something went wrong while trying to create the listing" });
  }
})

router.get("/", async (req, res) => {
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  const listings = await Listing.findAndCountAll({
    limit,
    offset,
    order: [["createdAt", "DESC"]]
  });

  const listingsWithInstruments = await Promise.all(listings.rows.map(async listing => {
    const listingInstrumentsJoinsList = await ListingInstrumentsJoinTable.findAll({ where: { listingId: listing.id } })
    const instrumentIds = listingInstrumentsJoinsList.map(listingInstrumentJoin => listingInstrumentJoin.instrumentId)
    return {
      ...listing.dataValues, 
      instruments: instrumentIds
    }
  }))

  res.status(200).send({ message: "ok", listings: {...listings, rows: listingsWithInstruments} });
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