import React from "react";

function Header({ countOfNotes }) {
  return (
    <header>
      <h1>Keeper {countOfNotes > 0 && ": " + countOfNotes} </h1>
    </header>
  );
}

export default Header;
