import express from "express";
import * as dotenv from "dotenv";
import placeholder from "../public/image.js";
// import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL-E" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    // write the actual code to make the api request; using temporary image in this case
    // const aiResponse

    // const image = "../constants/placeholder.png";
    const image = placeholder;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(error?.response.data.error.message || "Something went wrong");
  }
});

export default router;
