import { useLocation } from "react-router-dom";
import "./DetailPage.css";

const DetailPage = () => {
  const { state } = useLocation();

  console.log(state);

  return (
    <div className="detail_page">
      <h1> {state.name} </h1>
      <img src={state.sprites.front_default} />
      <img src={state.sprites.back_default} />
      <p>Height: {state.height}</p>
      <p>Weight: {state.weight}</p>
      <p>Base experience: {state.base_experience}</p>
      <p>Moves: {state.moves.map((move) => move.move.name)}</p>
    </div>
  );
};

export default DetailPage;
