import React from "react";
import FaqService from "../services/FaqService";

const ListRow = ({ id, summary, info, create = false, onChangeList, onEditItem }) => {
  const deleteFaq = () => {
    FaqService.deleteFaq(id);
    onChangeList();
  }

  return (
    <>
      <div className="list__row">
        <div className="list_row-left" onClick={() => onEditItem(id, summary, info)} >
          <p className="list__row-summary">Summary: {summary}</p>
          <p className="list__row-info">Info: {info}</p>
        </div>
        <div className="list__row-buttons">
          <button className="btn" onClick={deleteFaq}>Delete</button>
        </div>
      </div>
      <div className="list_row-devider"></div>
    </>
  );
};

export default ListRow;
