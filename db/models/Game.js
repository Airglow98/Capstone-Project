import mongoose from "mongoose";

const { Schema } = mongoose;

const gameSchema = new Schema({ game: { type: String } });

const Game = mongoose.models.Game || mongoose.model("Game", gameSchema);

export default Game;
