import React from "react";
//Components
import Guess from "./Guess";
//Constants
import { NUM_OF_GUESSES_ALLOWED } from "../../../constants";
//Utils
import { range } from "../../../utils";

function GuessResults({ guesses = [] }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((number) => (
        <Guess key={number} value={guesses[number]} />
      ))}
    </div>
  );
}

export default GuessResults;
