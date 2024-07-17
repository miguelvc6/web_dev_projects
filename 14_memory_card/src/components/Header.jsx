/* eslint-disable react/prop-types */
function Header({ highScore, currentScore }) {
  return (
    <>
      <div>
        <h1>Pokémon memory cards</h1>
        <h2>
          Get points by clicking on an image but don&apos;t click on any more
          than once!
        </h2>
      </div>
      <div>
        <p>Highest Score: {highScore}</p>
        <p>Current Score: {currentScore}</p>
      </div>
    </>
  );
}

export default Header;
