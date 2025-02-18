const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const InstrumentsJoinTable = require("../models").joinTableInstrument;
const Instrument = require("../models").instrument;
const StylesJoinTable = require("../models").joinTableStyle;
const Style = require("../models").style;
const { SALT_ROUNDS } = require("../config/constants");
const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({ where: { email } });

    const userStyleJoin = await StylesJoinTable.findOne({ where: {userId: user.id}
    })

    const userInstrumentJoin = await InstrumentsJoinTable.findOne({ where: {userId: user.id}
    })

    const userStyles = await Style.findAll({where: {id: userStyleJoin.styleId}})

    const userInstruments = await Instrument.findAll({where: {id: userInstrumentJoin.instrumentId}})

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect"
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, ...user.dataValues, styles: [userStyles], instruments: [userInstruments] });

  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { username, email, password, name, isBand, level, style, instrument } = req.body;
  console.log("BODY", req.body)
  if (!username || !email || !password || !name || typeof isBand !== "boolean" || !level || !style) {
    return res.status(400).send("Please provide details for every category");
  }
  
  try {
    const newUser = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
      isBand,
      level,
    });

    const newStyleJoin = await StylesJoinTable.create({
      styleId: style,
      userId: newUser.id
    })

    const newInstrumentJoin = await InstrumentsJoinTable.create({
      instrumentId: instrument,
      userId: newUser.id
    })

    const assignedStyle = await Style.findOne({where: {id: newStyleJoin.styleId}})

    const assignedInstrument = await Instrument.findOne({where: {id: newInstrumentJoin.instrumentId}})

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, ...newUser.dataValues, styles: [assignedStyle], instruments: [assignedInstrument] });
  
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }
    console.log(error)
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];

  const instrumentJoinsList = await InstrumentsJoinTable.findAll({ where: { userId: req.user.id } })
  const instruments = await Promise.all(instrumentJoinsList.map(async instrumentJoin => {
    const instrument = await Instrument.findOne({where: {id: instrumentJoin.instrumentId}})
    return instrument
  }))

  const styleJoinsList = await StylesJoinTable.findAll({ where: { userId: req.user.id } })
  const styles = await Promise.all(styleJoinsList.map(async styleJoin => {
    const style = await Style.findOne({where: {id: styleJoin.styleId}})
    return style
  }))
  console.log(instruments)

  res.status(200).send({ ...req.user.dataValues, instruments, styles });
});

module.exports = router;
