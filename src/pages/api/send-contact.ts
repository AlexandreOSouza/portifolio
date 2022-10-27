import { NextApiRequest, NextApiResponse } from "next";

const sgMail = require("@sendgrid/mail");
const apiKey = process.env.SENDGRID_APY_KEY;

sgMail.setApiKey(apiKey);
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const name = req.query?.name;
  const email = req.query?.email;
  const message = req.query?.message;

  const html = `<h3>Hey, this is a message from ${name}</h3></br><h4>${message}</h4></br><b>This message was sended by: ${email}</b>`;

  const msg = {
    to: "alesouza.eth@gmail.com",
    subject: "Contact from alesouza.dev",
    from: "alesouza.eth@gmail.com",
    html: html,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("contact send");
    })
    .catch((error: any) => {
      console.error(error);
      res.status(500);
    });

  res.status(200);
}
