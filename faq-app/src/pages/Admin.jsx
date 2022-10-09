import React, { useState } from "react";
import ListRow from "../components/ListRow";
import Modal from "../components/Modal/Modal";
import FaqService from "../services/FaqService";

const Admin = ({ faqs, setFaqs, changeCount, setChangeCount }) => {
  const [modalActive, setModalActive] = useState(false);
  const [id, setId] = useState("");
  const [summary, setSummary] = useState("");
  const [info, setInfo] = useState("");
  const [isCreate, setIsCreate] = useState(true);

  const onChangeList = () => {
    setChangeCount(changeCount + 1);
  }

  const saveFaq = () => {
    if (isCreate) {
      FaqService.postFaq(summary, info);
    } else {
      FaqService.putFaq(id, summary, info);
    }
    onChangeList();
    onModalClose();
  }

  const onModalClose = () => {
    setModalActive(false);
    setId('');
    setSummary('');
    setInfo('');
    setIsCreate(true);
  }

  const onEditItem = (id, summary, info) => {
    setIsCreate(false);
    setId(id);
    setSummary(summary);
    setInfo(info);
    setModalActive(true);
  }

  return (
    <>
      <div className="list">
        <div className="list_add">
          <button className="btn" onClick={() => setModalActive(true)}>Add</button>
        </div>
        {faqs.map(item =>
          <ListRow
            key={item._id}
            id={item._id}
            summary={item.summary}
            info={item.info}
            create={item.create}
            onChangeList={onChangeList}
            onEditItem={onEditItem}
          />
        )}
      </div>
      <Modal
        active={modalActive}
        onModalClose={onModalClose}
      >
        <h3 className="modal__title">
          {isCreate ? "Create new" : "Edit"}
        </h3>
        <div className="modal__row">
          <div className="modal__row-summary">
            <textarea
              className="text"
              placeholder="Summary"
              value={summary}
              rows="2"
              onChange={(e) => setSummary(e.target.value)}
            >
            </textarea>
          </div>
          <div className="modal__row-info">
            <textarea
              className="text"
              placeholder="Info"
              value={info}
              rows="10"
              onChange={(e) => setInfo(e.target.value)}
            >
            </textarea>
          </div>
          <div className="modal__row-buttons">
            <button className="btn" onClick={saveFaq}>Save</button>
          </div>
        </div>

      </Modal>
    </>
  );
};

export default Admin;