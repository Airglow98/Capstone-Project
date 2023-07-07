import useSWR from "swr";

export default function Test() {
  const { data, isLoading } = useSWR("/api/games");
  console.log(data);

  if (isLoading) {
    return <h2>is Loading...</h2>;
  } else if (!data) {
    return <p>no data</p>;
  }

  return data.map((game) => <p key={game.id}>{game.title}</p>);
}
