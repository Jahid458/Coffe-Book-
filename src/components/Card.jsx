/* eslint-disable react/prop-types */
const Card = ({coffee}) => {
  // eslint-disable-next-line no-unused-vars
  const {name, image, category, type, origin, id, rating, popularity} = coffee || {};
  return <div>{name}</div>;
};

export default Card;
