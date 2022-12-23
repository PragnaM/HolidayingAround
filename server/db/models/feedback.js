import m from "mongoose";

const { Schema, model } = m;

const feedbackSchema = Schema({
  name: String,
  email: String,
  feedback: String,
});

const Feedback = model("Feedback", feedbackSchema);

export default Feedback;
