import mongoose from "mongoose";

const { Schema, model } = mongoose;

const gameSchema = new Schema({
  id: { type: Number },
  title: { type: String },
  imgpath: { type: String },
  release: { type: String },
  publisher: { type: String },
  developer: { type: String },
  platform: { type: String },
  singleplayer: { type: String },
  multiplayer: { type: String },
  crossplay: { type: String },
  category: { type: String },
  metacritic: { type: String },
  achievements: { type: String },
  isLibrary: { type: Boolean },
  isWishlist: { type: Boolean },
});

const Game = mongoose.models.Game || mongoose.model("Game", gameSchema);

export default Game;
