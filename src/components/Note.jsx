import React from "react";

function Note({ title, content, deleteItem, id }) {
  // const handleClick = () => {
  //   deleteItem(id);
  // };

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        onClick={() => {
          deleteItem(id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
