import useApiFetch from "../../apiHandler/customHookApiCall";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar";
import "./HomePage.css";

const initialUrl = "https://pokeapi.co/api/v2/pokemon";

const HomePage = () => {
  const { data, isLoad } = useApiFetch(initialUrl);

  if (!isLoad) return <h1> loading </h1>;

  return (
    <div className="homepage">
      <h1>Pokedex</h1>
      <SearchBar />
      {data.results.map((pokemon) => (
        <Card name={pokemon.name} url={pokemon.url} key={pokemon.name} />
      ))}
    </div>
  );
};

export default HomePage;
