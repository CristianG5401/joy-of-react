import React from "react";
//Utils
import { range } from "../../../../utils";

function Cell({ status, children }) {
  return <span className={`cell ${status}`}>{children}</span>;
}

function Guess({ value }) {
  return (
    <p className="guess">
      {range(0, 5).map((number) => {
        const { status = "", letter = null } = value ? value[number] : {};

        return (
          <Cell key={number} status={status}>
            {letter}
          </Cell>
        );
      })}
    </p>
  );
}

export default Guess;
