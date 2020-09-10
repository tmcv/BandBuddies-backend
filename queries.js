const User = require("./models").user;
const MusicExample = require("./models").musicExample;
const Instrument = require("./models").instrument;
const Style = require("./models").style

const allUsers = async () => {
  try {
    const users = await User.findAll({ include: [MusicExample, Instrument, Style] });
    console.log(users.map(u => u.get({ plain: true })));
  } catch (e) {
    console.log("error", e.message);
  }
};

allUsers();