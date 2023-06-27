import { useRouter } from "next/router";
import { initialGames } from "@/db/games/data";

export default function GameDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const game = initialGames.find((game)=> game.id.toString()=== id)

  
return (
    <div>
      {game? (<>
      <p>Release: {game.release}</p>
      <p>Publisher: {game.publisher}</p>
      <p>Developer: {game.developer}</p>
      <p>Platforms: {game.platform}</p>
      <p>Crossplay: {game.crossplay}</p>
      <p>Category: {game.category}</p>
      <p>Metacritic: {game.metacritic}</p>
      </>
      ):(<p>Cannot find this game</p>)}
    </div>
  );
}
