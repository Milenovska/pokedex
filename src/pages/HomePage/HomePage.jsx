import useApiFetch from "../../apiHandler/customHookApiCall";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar";
import "./HomePage.css";

const initialUrl = `https://pokeapi.co/api/v2/pokemon/`;
//const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

const HomePage = () => {
  const { data, isLoad } = useApiFetch(initialUrl);

  if (!isLoad) return <h1> loading </h1>;

  return (
    <div className="homepage">
      <h1>Pokedex</h1>
      <SearchBar />
      <div className="container">
        {data.results.map((pokemon) => (
          <Card name={pokemon.name} url={pokemon.url} key={pokemon.name} />
        ))}{" "}
      </div>
      <Button label={"Next"} />
    </div>
  );
};

export default HomePage;
