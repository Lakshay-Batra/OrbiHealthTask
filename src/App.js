import React, { useEffect, useState } from "react";
import "./styles.css";
import NavigationBar from "./components/NavigationBar";
import Breadcrumb from "./components/Breadcrumb";
import Content from "./components/Content";
import AddEditCard from "./components/AddEditCard";
// import { InsertChart } from "@material-ui/icons";

// Initial state for content of drive
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
  // state to show pop-up form for renaming and creating new Folder/File
  const [showAddEditCard, setShowAddEditCard] = useState(false);
  // state for drive content
  const [driveContent, setDriveContent] = useState(initialFolder);
  // state to determine path of navigation at any instant
  const [path, setPath] = useState(["mydrive"]);
  // state with array of folders and files to be rendered on screen
  const [contentOnScreen, setContentOnScreen] = useState(initialFolder["folders"].concat(initialFolder["files"]));
  // state to set operations like add/edit folder/file etc
  const [operation, setOperation] = useState();
  // state to store value(name) and type(file/folder) coming from Card component while renaming
  const [editValue, setEditValue] = useState("");
  const [editType, setEditType] = useState("");

  // function to find current working directory, it returns object of current working directory
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

  // function to create new file/folder inside current working directory
  function createFileFolder(name, type) {
    // type + "s" to make it same string as that of files/folders array
    type = type + "s";
    var duplicateItem = false;
    /* currentArrayToLookInto is the array which will refer to array of file or folder
     inside current folder based on type. */
    var currentArrayToLookInto = findCurrentDirectory()[type];
    // creating object to be pushed into required array
    var fObject;
    if (type === "folders") {
      fObject = { name: name, type: "folder", files: [], folders: [] };
    } else {
      fObject = { name: name, type: "file" };
    }
    // check duplicacy of file/folder
    currentArrayToLookInto.forEach((obj) => {
      if (obj.name === name) {
        window.alert("Already Present");
        duplicateItem = true;
      }
    });
    // if not duplicate then push the object and update drive content as well as new content to be rendered on screen
    if (!duplicateItem) {
      currentArrayToLookInto.push(fObject);
      setDriveContent(driveContent);
      var currentDirectory = findCurrentDirectory();
      setContentOnScreen(currentDirectory["folders"].concat(currentDirectory["files"]));
    }
  }
  // function when user clicks on any folder, hierarchy: App.js > Content.js > Card.js 
  function displayCurrentDirectory(name) {
    setPath((prevValue) => [...prevValue, name]);
  }
  // componentWillUpdate to update content on window when there is path change
  // path will change with every navigation 
  useEffect(() => {
    var currentDirectory = findCurrentDirectory();
    setContentOnScreen(currentDirectory["folders"].concat(currentDirectory["files"]));
  }, [path, driveContent]);

  // function to delete specific folder/file
  function deleteFileFolder(name, type) {
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

  // getting details of file/folder from card to rename it 
  function editFileFolder(name, type, operation) {
    setOperation(operation);
    setShowAddEditCard(true);
    setEditValue(name);
    setEditType(type);
  }
  // renaming the file/folder and updating drive content and content to be rendered on screen
  function handleEdit(name) {
    var newDriveContent = driveContent;
    var currentDirectory = findCurrentDirectory();
    currentDirectory[`${editType}s`].forEach(item => {
      if (item.name === editValue) {
        item.name = name;
      }
    });
    setDriveContent(newDriveContent);
    setContentOnScreen(currentDirectory["folders"].concat(currentDirectory["files"]));
    setEditValue("");
  }

  // function to be called when any value at breadcrumb is clicked
  function alterPath(index) {
    // setting the path state to that particular navigation
    var newPath = []
    for (var i = 0; i <= index; i++) {
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
