import useApiFetch from "../../apiHandler/customHookApiCall";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar";
import "./HomePage.css";
import { useState } from "react";

const initialUrl = `https://pokeapi.co/api/v2/pokemon/`;
//const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

const HomePage = () => {
  const { data, isLoad } = useApiFetch(initialUrl);
  const [searchValue, setSearchValue] = useState("");

  if (!isLoad) return <h1> loading </h1>;

  const handleSearchValue = (val) => {
    setTimeout(() => {
      setSearchValue(val);
    }, 500);
  };

  const filteredData = data.results.filter((item) => {
    if (!item && !item.name) return;
    return item.name.includes(searchValue.toLowerCase());
  });

  return (
    <div className="homepage">
      <h1>Pokedex</h1>
      <SearchBar onChange={handleSearchValue} />
      <div className="container">
        {filteredData.map((pokemon) => (
          <Card name={pokemon.name} url={pokemon.url} key={pokemon.name} />
        ))}
      </div>
      <Button label={"Next"} />
    </div>
  );
};

export default HomePage;
