import React from "react";
import AddButton from "./AddButton";

function Breadcrumb(props) {
  function alterPath(event) {
    const index = event.target.dataset.index;
    props.alterPath(index);
  }
  return (
    <div className="breadcrumb">
      <AddButton
        setOperation={props.setOperation}
        setShowAddEditCard={props.setShowAddEditCard}
      />
      <div className="path-container">
        {props.path.map((level, index) => {
          return <h5 onClick={alterPath} key={index} data-index={index}> {level} /</h5>;
        })}
      </div>
    </div>
  );
}

export default Breadcrumb;
