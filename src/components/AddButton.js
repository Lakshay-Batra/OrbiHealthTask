import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import FolderIcon from "@material-ui/icons/Folder";
import DescriptionIcon from "@material-ui/icons/Description";

function AddButton(props) {
  const [showDropdown, setShowDropDown] = useState(false);

  function handleAddClick(event) {
    event.stopPropagation();
    setShowDropDown(!showDropdown);
  }
  // adding event listener to hide dropDown when cicked anywhere on window
  useEffect(() => {
    if (showDropdown) {
      window.addEventListener("click", () => {
        setShowDropDown(false);
      });
    }
    return window.removeEventListener("click", () => {
      setShowDropDown(false);
    });
  }, [showDropdown]);

  // function to open AddCard to create new file/folder
  function setShowAddFolder() {
    props.setShowAddEditCard(true);
    props.setOperation("addFolder");
  }
  function setShowAddFile() {
    props.setShowAddEditCard(true);
    props.setOperation("addFile");
  }

  return (
    <div className="add-container">
      <div onClick={handleAddClick} className="add-btn">
        <AddIcon fontSize="large" color="primary" />
        <span className="add-text">New</span>
      </div>

      {showDropdown && (
        <div onClick={(event) => event.stopPropagation()} className="add-menu">
          <div onClick={setShowAddFolder} className="flex-row-center">
            <FolderIcon />
            <h3>Folder</h3>
          </div>
          <hr style={{ width: "90%" }} />
          <div onClick={setShowAddFile} className="flex-row-center">
            <DescriptionIcon />
            <h3>File</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddButton;
