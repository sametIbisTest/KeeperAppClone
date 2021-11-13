import React, { useState } from "react";

function CreateArea({ addItem }) {
  const [note, setNote] = useState({ title: "", content: "" });

  const { title, content } = note;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          addItem(note);
          setNote({ title: "", content: "" });
          event.preventDefault();
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          value={title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={content}
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
