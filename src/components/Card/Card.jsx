import { useNavigate } from "react-router-dom";
import useApiFetch from "../../apiHandler/customHookApiCall";
import Button from "../Button/Button";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ name, url }) => {
  const { data, isLoad } = useApiFetch(url);

  const navigate = useNavigate();

  if (!isLoad) return <p>loading</p>;

  const handleDetailNavigate = () => {
    navigate(`detail/${name}`, {
      state: data,
    });
  };

  return (
    <div className="card">
      <img src={data.sprites.front_default} />
      {name}
      <Button label={"Open detail"} onClick={handleDetailNavigate} />
    </div>
  );
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
