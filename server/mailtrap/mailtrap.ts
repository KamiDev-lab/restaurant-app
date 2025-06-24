import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const client = new MailtrapClient({token: process.env.MAILTRAP_API_TOKEN! });

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Syed Kamran Shah",
};

