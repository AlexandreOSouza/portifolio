import { NextApiRequest, NextApiResponse } from "next";

const sgMail = require("@sendgrid/mail");
const apiKey = process.env.SENDGRID_APY_KEY;
sgMail.setApiKey(apiKey);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const message = req.query?.message;
  const title = req.query?.title;
  const msg = {
    to: "alesouza.eth@gmail.com",
    from: "alesouza.eth@gmail.com",
    subject: title,
    html: `<h2>${message}</h2>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("email sent");
    })
    .catch((error: any) => {
      console.error(error);
      res.status(500);
    });

  res.status(200);
}
