import { useLocation } from "react-router-dom";
import "./DetailPage.css";

const DetailPage = () => {
  const { state } = useLocation();

  console.log(state);

  return (
    <div className="detail_page">
      <h1> {state.name} </h1>
      <img src={state.sprites.front_default} height={"250px"} width={"250px"} />
      <img src={state.sprites.back_default} height={"250px"} width={"250px"} />
      <h3>Height:</h3> <p> {state.height} g </p>
      <h3>Weight: </h3> <p> {state.weight} cm </p>
      <h3>Base experience: </h3>
      <p> {state.base_experience}</p>
      <h3>Moves:</h3> <p> {state.moves.map((move) => move.move.name)}</p>
    </div>
  );
};

export default DetailPage;
