import React from "react";
//Components
import GuessForm from "./GuessForm";
import GuessResults from "./GuessResults";
import HappyBanner from "./HappyBanner";
import SadBanner from "./SadBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [didUserWon, setDidUserWon] = React.useState(false);

  const isGameCompleted = guesses.length >= 6 || didUserWon;

  const handleSubmitGuess = (tentativeGuess) => {
    if (tentativeGuess === answer) {
      setDidUserWon(true);
    }
    setGuesses((prevGuesses) => {
      const nextGuesses = [...prevGuesses, checkGuess(tentativeGuess, answer)];

      return nextGuesses;
    });
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessForm
        onSubmitGuess={handleSubmitGuess}
        isDisabled={isGameCompleted}
      />
      {didUserWon && <HappyBanner numberOfGuesses={guesses.length} />}
      {!didUserWon && guesses.length >= 6 && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
