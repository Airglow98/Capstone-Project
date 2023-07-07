import dbConnect from "../../../db/connect";
import Game from "../../../db/models/Game";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const dbGames = await Game.find();
    return response.status(200).json(dbGames);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
