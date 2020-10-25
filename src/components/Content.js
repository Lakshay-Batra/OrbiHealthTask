import React, { useState, useEffect } from "react";
import Card from "./Card";

function Content(props) {
  return (
    <div className="content">
      {props.contentOnScreen.map((item, index) => {
        return (
          <Card
            deleteFileFolder={props.deleteFileFolder}
            editFileFolder={props.editFileFolder}
            displayCurrentDirectory={props.displayCurrentDirectory}
            key={index}
            name={item.name}
            type={item.type}
          />
        );
      })}
    </div>
  );
}

export default Content;
