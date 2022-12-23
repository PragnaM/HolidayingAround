import express from "express";
import cors from "cors";
import multer from "multer";
import dbo from "./db/db_conn.js";
import Feedback from "./db/models/feedback.js";
// import mongoose from "mongoose";
import { config } from "dotenv";
import dbconnect from "./db/db_conn.js";

dbconnect();
config();
const app = express();

app.use(express.json());

//Saving and loading files to the server
app.use(cors());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage }).single("file");

app.post("/upload", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

//Serving files to the client
app.use("/images", express.static("uploads"));

//Adding data in the database
app.post("/feedback", async (req, res) => {
  console.log(req.body);
  const newFeedback = new Feedback({
    name: req.body.firstname,
    email: req.body.email,
    feedback: req.body.feedback,
  });
  await newFeedback.save();
  console.log(newFeedback);
  res.send("Feedback saved");
});

app.get("/feedbacks", async (req, res) => {
  const feedbacks = await Feedback.find();
  res.send(feedbacks);
});

app.listen(3001, function () {
  console.log("Backend server running on port 3001");
});
