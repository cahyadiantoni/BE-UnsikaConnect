import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
  desc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

export default mongoose.model("Post", postSchema);