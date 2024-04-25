import React from "react";

function HappyBanner({ numberOfGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numberOfGuesses} guesses</strong>.
      </p>
    </div>
  );
}

export default HappyBanner;
