const { Router } = require("express");
const sgMail = require('@sendgrid/mail');
const secrets = require('../config/secrets');

const router = new Router();

sgMail.setApiKey(secrets.sendGridApiKey);
// console.log(secrets.sendGridApiKey)

router.post("/", async (req, res) => {
  const { to, userEmail, subject, text } = req.body;
  if (!to || !userEmail || !subject || !text) {
    res.status(400).send({message: "Something went wrong. Please make sure you have written a message"})
  }
  const msg = {
    to,
    from: 'bandbuddiesonline@gmail.com',
    subject,
    text,
    html: `<p>${text}</p><br><strong>Please direct any response to this message to: ${userEmail}</strong>`,
  };
  sgMail.send(msg);
  res.status(200).send({ message: "ok" });
});

module.exports = router;
