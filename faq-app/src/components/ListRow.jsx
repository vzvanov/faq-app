import React, { useState } from "react";
import FaqService from "../services/FaqService";

const ListRow = ({ id, summary, info, create = false, onChangeList }) => {
  const [_id, setId] = useState(id);
  const [_summary, setSummary] = useState(summary);
  const [_info, setInfo] = useState(info);
  const [_create, setCreate] = useState(create);

  const saveFaq = () => {
    if (_create) {
      FaqService.postFaq(_summary, _info, setId, setCreate);
    } else {
      FaqService.putFaq(_id, _summary, _info);
    }
    onChangeList();
  }

  const deleteFaq = () => {
    FaqService.deleteFaq(_id);
    onChangeList();
  }

  return (
    <div className="list__row">
      <div className="list__row-summary">
        <textarea
          value={_summary}
          rows="2"
          onChange={(e) => setSummary(e.target.value)}
        >
        </textarea>
      </div>
      <div className="list__row-info">
        <textarea
          value={_info}
          rows="10"
          onChange={(e) => setInfo(e.target.value)}
        >
        </textarea>
      </div>
      <div className="list__row-buttons">
        <button className="btn" onClick={saveFaq}>Save</button>
        {!_create && <button className="btn" onClick={deleteFaq}>Delete</button>}
      </div>
      <div className="list_row-devider"></div>
    </div>
  );
};

export default ListRow;
