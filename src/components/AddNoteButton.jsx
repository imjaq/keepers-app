import React, { useState } from "react";
 import { FaPlus } from "react-icons/fa";


function AddNoteButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [note, setNote] = useState("");

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleAddNote = () => {
    // Add your code to save the note to the database or local storage
    console.log("Note added: ", note);
    setNote("");
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
      <FaPlus />
      </button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <textarea value={note} onChange={handleNoteChange} />
            <button onClick={handleAddNote}>Add Note</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddNoteButton;
