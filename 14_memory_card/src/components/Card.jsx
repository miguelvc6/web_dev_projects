/* eslint-disable react/prop-types */
function Card({ pokemonName, imgSrc, onClick }) {
  return (
    <>
      <div className="pokemonCard" onClick={onClick}>
        <p>{pokemonName}</p>
        <img src={imgSrc}></img>
      </div>
    </>
  );
}

export default Card;
