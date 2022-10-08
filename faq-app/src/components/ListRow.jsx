import React, { useState } from "react";
import $api from "../axios";

const ListRow = ({ id, summary, info, create = false, onDeleteItem }) => {
  const [_id, setId] = useState(id);
  const [_summary, setSummary] = useState(summary);
  const [_info, setInfo] = useState(info);
  const [_create, setCreate] = useState(create);

  const saveFaq = () => {
    if (_create) {
      $api
        .post('/faqs', { summary: _summary, info: _info })
        .then(res => {
          setId(res.data._id);
          setCreate(false);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      $api
        .put('/faqs', { id: _id, summary: _summary, info: _info })
        .then(res => {
          //res.data contain prev. faq
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  const deleteFaq = () => {
    $api
      .delete('/faqs', { data: { id: _id } })
      .then(res => {
        //res.data contain deleted faq
      })
      .catch(error => {
        console.log(error);
      });
    onDeleteItem();
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
