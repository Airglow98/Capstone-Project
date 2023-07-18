import dbConnect from "../../../db/connect";
import Game from "../../../db/models/Game";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const dbGames = await Game.find({});
    return response.status(200).json(dbGames);
  } else if (request.method === "PUT") {
    try {
      const { _id } = request.body;
      const newData = request.body;
      console.log(request.body);

      const game = await Game.findById(_id);

      if (!game) {
        return response.status(404).json({ message: "Games could not found" });
      }

      await Game.findByIdAndUpdate(_id, newData);

      return response.status(200).json(game);
    } catch (error) {
      return response.status(500).json({ message: "Server error" });
    }
  } else {
    return response.status(405).json({ message: "Method is not allowed" });
  }
}
