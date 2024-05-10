import { NextApiRequest, NextApiResponse } from "next";

import nodemailer from "nodemailer";

type Fields = {
  name: string;
  phoneNumber: string;
};

type Response = {
  error?: string;
  status?: string;
  message?: string;
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Response>
) {
  if (request.method !== "POST") {
    return response.status(404).send({ status: "fail" });
  }

  const { name, phoneNumber } = request.body as Fields;

  try {
    if (!name || !name.trim()) {
      throw new Error("Please provide a valid name.");
    }

    if (!phoneNumber || !phoneNumber.trim()) {
      throw new Error("Please provide a valid phoneNumber.");
    }

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      text: `
        Имя: ${name}
        Номер телефона: ${phoneNumber}`,
      subject: `Привет от ${name}`,
    });

    return response
      .status(200)
      .send({ status: "done", message: "Message has been sent" });
  } catch (error) {
    return response.status(500).send({ status: "fail", message: `${error}` });
  }
}
