import DetailButton from "../DetailButton/DeatilButton";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ name, url }) => {
  return (
    <div className="card">
      {name}
      <DetailButton />
    </div>
  );
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
