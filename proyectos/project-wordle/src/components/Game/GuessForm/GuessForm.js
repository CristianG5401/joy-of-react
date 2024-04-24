import React from "react";

function GuessForm() {
  const [guessValue, setGuessValue] = React.useState("");

  const guessInputHandler = (event) => {
    const { value } = event.target;
    if (value.length > 5) return;
    const nextValue = value.toUpperCase();

    setGuessValue(nextValue);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("🍧 User answer: ", guessValue);

    setGuessValue("");
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={formSubmitHandler}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          value={guessValue}
          type="text"
          pattern="^[a-zA-Z]{5}$"
          title="5-letter word."
          onChange={guessInputHandler}
        />
      </form>
    </>
  );
}

export default GuessForm;
