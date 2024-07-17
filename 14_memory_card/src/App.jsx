import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";

// Helper function to shuffle an array
function shuffle(array) {
  let newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Fetch image source for a given Pokémon API URL
async function fetchImgSrc(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const response_1 = await response.json();
    const imgUrl = response_1["sprites"]["front_default"];
    return imgUrl;
  } catch (error) {
    console.error("Error:", error);
    return undefined;
  }
}

// Fetch a list of Pokémon
async function fetchCards() {
  const page = Math.floor(Math.random() * 10);
  const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${page * 12}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const results = await Promise.all(
      data["results"].map(async (element) => {
        const imgSrc = await fetchImgSrc(element.url);
        return {
          pokemonName: element.name,
          imgSrc: imgSrc,
        };
      })
    );
    return results;
  } catch (error) {
    console.error("Error:", error);
    return undefined;
  }
}

function App() {
  const [cardList, setCardList] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    fetchCards().then((data) => {
      setCardList(data);
    });
  }, []);

  function clickOnCard(card) {
    if (clickedCards.includes(card.pokemonName)) {
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      const newClickedCards = [...clickedCards, card.pokemonName];
      setClickedCards(newClickedCards);
      const newCurrentScore = currentScore + 1;
      setCurrentScore(newCurrentScore);

      if (newCurrentScore > highScore) {
        setHighScore(newCurrentScore);
      }
    }
    setCardList(shuffle(cardList));
  }

  function fetchNewCards() {
    fetchCards().then((data) => {
      setCardList(data);
    });
    const newClickedCards = [];
    setClickedCards(newClickedCards);
    const newCurrentScore = 0;
    setCurrentScore(newCurrentScore);
  }

  return (
    <>
      <div className="header">
        <Header highScore={highScore} currentScore={currentScore}></Header>
        <button onClick={fetchNewCards}>NEW POKÉMONS</button>
      </div>

      <div className="gameBoard">
        {cardList.map((card, idx) => {
          return (
            <Card
              key={idx}
              pokemonName={card.pokemonName}
              imgSrc={card.imgSrc}
              onClick={() => {
                clickOnCard(card);
              }}
            ></Card>
          );
        })}
      </div>
    </>
  );
}

export default App;
