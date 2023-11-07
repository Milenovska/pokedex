import { useLocation } from "react-router-dom";
import "./DetailPage.css";

const DetailPage = () => {
  const { state } = useLocation();

  return (
    <div className="detail_container">
      <h1 className="pokemon_name"> {state.name} </h1>

      <div className="detail_page">
        <div className="pokemon_images">
          <img src={state.sprites.front_default} className="image_front" />
          <img src={state.sprites.back_default} className="image_back" />
        </div>
        <div className="texts">
          <h3 className="pokemon_information">Height:</h3>{" "}
          <p className="information_data"> {state.height} m </p>
          <h3 className="pokemon_information">Weight: </h3>{" "}
          <p className="information_data"> {state.weight} kg </p>
          <h3 className="information_data">Type: </h3>
          <p className="information_data">
            {state.types.map((item) => item.type.name)}
          </p>
          <h3 className="pokemon_information">Base experience: </h3>
          <p className="information_data"> {state.base_experience} HP</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
