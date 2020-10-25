import React, { useState, useEffect } from "react";

function AddEditCard(props) {
  const [name, setName] = useState(props.editValue);

  function handleInput(event) {
    event.stopPropagation();
    setName(event.target.value);
  }
  function handleCancel(event) {
    event.stopPropagation();
    props.setShowAddEditCard(false);
  }
  function handleCreate(event) {
    event.stopPropagation();
    if (props.operation === "addFolder") props.createFileFolder(name, "folder");
    if (props.operation === "addFile") props.createFileFolder(name, "file");
    props.setShowAddEditCard(false);
  }

  function handleEdit(event) {
    event.stopPropagation();
    props.handleEdit(name);
    props.setShowAddEditCard(false);
  }

  return (
    <div className="add-card-window">
      <div className="add-card">
        <div className="input-container">
          <input
            onChange={handleInput}
            onClick={(e) => e.stopPropagation()}
            type="text"
            placeholder="Enter Name"
            value={name}
          />
        </div>
        <div className="add-card-btns">
          <button onClick={handleCancel} className="cancel-btn">
            Cancel
          </button>
          {(props.operation === "edit") ?
            <button onClick={handleEdit} className="create-btn">Save</button>
            :
            <button onClick={handleCreate} className="create-btn">Create</button>}
        </div>
      </div>
    </div>
  );
}

export default AddEditCard;
