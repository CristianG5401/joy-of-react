import React from "react";

function GuessForm({ onSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const guessInputHandler = (event) => {
    const { value } = event.target;
    if (value.length > 5) return;
    const nextValue = value.toUpperCase();

    setTentativeGuess(nextValue);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("🍧 User answer: ", tentativeGuess);

    onSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={formSubmitHandler}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          id="guess-input"
          value={tentativeGuess}
          type="text"
          minLength={5}
          maxLength={5}
          pattern="^[a-zA-Z]{5}$"
          title="5-letter word."
          onChange={guessInputHandler}
        />
      </form>
    </>
  );
}

export default GuessForm;
