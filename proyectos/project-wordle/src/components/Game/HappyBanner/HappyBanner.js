import React from "react";
// Components
import Banner from "../Banner";

function HappyBanner({ numberOfGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numberOfGuesses} {numberOfGuesses > 1 ? "guesses" : "guess"}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default HappyBanner;
