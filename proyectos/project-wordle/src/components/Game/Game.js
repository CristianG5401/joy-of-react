import React from "react";
//Components
import GuessForm from "./GuessForm";
import GuessResults from "./GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handleSubmitGuess = (tentativeGuess) => {
    setGuesses((prevGuesses) => {
      const nextGuesses = [...prevGuesses, checkGuess(tentativeGuess, answer)];

      return nextGuesses;
    });
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessForm onSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
