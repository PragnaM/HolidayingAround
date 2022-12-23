import m from "mongoose";
import { config } from "dotenv";
const { connect } = m; //Get connect method out of mongoose
config();

const MONGO_URI =
  "mongodb+srv://pragnam97:hw5cluster@hw5cluster.f2b8mqg.mongodb.net/feedback-form";

export default async function dbconnect() {
  console.log(MONGO_URI);
  // Connecting to the database
  connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((err) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
}
