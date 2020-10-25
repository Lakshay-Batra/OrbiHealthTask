import React, { useEffect, useState } from "react";
import "./styles.css";
import NavigationBar from "./components/NavigationBar";
import Breadcrumb from "./components/Breadcrumb";
import Content from "./components/Content";
import AddEditCard from "./components/AddEditCard";
// import { InsertChart } from "@material-ui/icons";

const initialFolder = {
  key: "1",
  name: "my drive",
  files: [],
  folders: [
    {
      name: "Demo Folder",
      type: "folder",
      files: [],
      folders: []
    }
  ]
};

function App() {
  const [showAddEditCard, setShowAddEditCard] = useState(false);
  const [driveContent, setDriveContent] = useState(initialFolder);
  const [path, setPath] = useState(["mydrive"]);
  const [contentOnScreen, setContentOnScreen] = useState(initialFolder["folders"].concat(initialFolder["files"]));
  // state to set operations like add folder/file etc
  const [operation, setOperation] = useState();
  const [editValue,setEditValue] = useState("");
  const [editType,setEditType] = useState("");

  // function to find current working directory and returning the appropriate array for file
  function findCurrentDirectory() {
    var currentDirectory = driveContent;
    var currentArrayToLookInto = currentDirectory["folders"];
    path.forEach((level) => {
      if (level !== "my drive")
        for (var i = 0; i < currentArrayToLookInto.length; i++) {
          if (level === currentArrayToLookInto[i].name) {
            currentDirectory = currentArrayToLookInto[i];
            currentArrayToLookInto = currentArrayToLookInto[i]["folders"];
            break;
          }
        }
    });
    return currentDirectory;
  }

  // function to create new file/folder inside current directory
  function createFileFolder(name, type) {
    type = type + "s";
    var duplicateItem = false;
    var currentArrayToLookInto = findCurrentDirectory()[type];
    var fObject;
    if (type === "folders") {
      fObject = { name: name, type: "folder", files: [], folders: [] };
    } else {
      fObject = { name: name, type: "file" };
    }
    currentArrayToLookInto.forEach((obj) => {
      if (obj.name === name) {
        window.alert("Already Present");
        duplicateItem = true;
      }
    });
    if (!duplicateItem) {
      currentArrayToLookInto.push(fObject);
      setDriveContent(driveContent);
      var currentDirectory = findCurrentDirectory();
      setContentOnScreen(currentDirectory["folders"].concat(currentDirectory["files"]));
    }
  }

  function displayCurrentDirectory(name) {
    setPath((prevValue) => [...prevValue, name]);
  }
  useEffect(() => {
    var currentDirectory = findCurrentDirectory();
    setContentOnScreen(currentDirectory["folders"].concat(currentDirectory["files"]));
  }, [path, driveContent]);

    function deleteFileFolder (name, type) {
    var newDriveContent = driveContent;
    var newArray = [];
    var currentDirectory = findCurrentDirectory();
    var deleteIndex;
    type += "s";
    currentDirectory[type].forEach((item) => {
      if (item.name != name) {
        newArray.push(item);
      }
    });
    currentDirectory[type] = newArray;
    setDriveContent(newDriveContent);
    setContentOnScreen(currentDirectory["folders"].concat(currentDirectory["files"]));
  }

  function editFileFolder(name, type, operation) {
    setOperation(operation);
    setShowAddEditCard(true);
    setEditValue(name);
    setEditType(type);
  }

  function handleEdit(name) {
    var newDriveContent = driveContent;
    var currentDirectory = findCurrentDirectory();
    currentDirectory[`${editType}s`].forEach(item => {
      if(item.name === editValue) {
        item.name = name;
      }
    });
    setDriveContent(newDriveContent);
    setContentOnScreen(currentDirectory["folders"].concat(currentDirectory["files"]));
    setEditValue("");
  }

  // function to be called when any value at breadcrumb is clicked
  function alterPath(index) {
    var newPath = []
    for(var i=0;i<=index;i++) {
      newPath.push(path[i]);
    }
    setPath(newPath);
    var currentDirectory = findCurrentDirectory();
    setContentOnScreen(currentDirectory["folders"].concat(currentDirectory["files"]));
  }

  return (
    <div className="App">
      <NavigationBar />
      <Breadcrumb
        path={path}
        alterPath={alterPath}
        setOperation={setOperation}
        setShowAddEditCard={setShowAddEditCard}
      />
      <Content
        deleteFileFolder={deleteFileFolder}
        editFileFolder={editFileFolder}
        displayCurrentDirectory={displayCurrentDirectory}
        contentOnScreen={contentOnScreen}
      />
      {showAddEditCard && (
        <AddEditCard
          operation={operation}
          editValue={editValue}
          handleEdit={handleEdit}
          createFileFolder={createFileFolder}
          setShowAddEditCard={setShowAddEditCard}
        />
      )}
    </div>
  );
}

export default App;
