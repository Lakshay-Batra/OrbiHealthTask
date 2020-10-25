import React, { useState, useEffect } from "react";
import FolderIcon from "@material-ui/icons/Folder";
import DescriptionIcon from "@material-ui/icons/Description";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Card(props) {
  const [editDeleteMenu, setEditDeleteMenu] = useState(false);
  function rightClick(e) {
    e.preventDefault();
    e.stopPropagation();
    setEditDeleteMenu(true);
  }
  useEffect(() => {
    if (editDeleteMenu) {
      window.addEventListener("click", () => {
        setEditDeleteMenu(false);
      });
    }
    return window.removeEventListener("click", () => {
      setEditDeleteMenu(false);
    });
  }, [editDeleteMenu]);

  function openNewDirectory() {
    if (!editDeleteMenu && props.type === "folder") {
      props.displayCurrentDirectory(props.name);
    }
  }
  function handleDelete() {
    props.deleteFileFolder(props.name, props.type);
  }
  function handleEdit() {
    props.editFileFolder(props.name, props.type, "edit");
  }
  return (
    <div onClick={openNewDirectory} className="card-container">
      {editDeleteMenu ? (
        <div
          onClick={(e) => e.stopPropagation()}
          className="card"
          style={{ cursor: "auto" }}
        >
          <DeleteIcon onClick={handleDelete} className="delete-icon" />
          <EditIcon onClick={handleEdit} className="edit-icon" />
        </div>
      ) : props.type === "folder" ? (
        <div onContextMenu={rightClick} className="card">
          <FolderIcon />
          <span>{props.name}</span>
        </div>
      ) : (
        <div onContextMenu={rightClick} className="card">
          <DescriptionIcon />
          <span>{props.name}</span>
        </div>
      )}
    </div>
  );
}

export default Card;
