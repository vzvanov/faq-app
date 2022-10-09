import React from "react";
import ListRow from "../components/ListRow";

const Admin = ({ faqs, setFaqs, changeCount, setChangeCount }) => {

  const AddRow = () => {
    const item = {
      _id: Date.now(),
      summary: '',
      info: '',
      create: true,
    }
    setFaqs([item, ...faqs]);
  }
  const onChangeList = () => {
    setChangeCount(changeCount + 1);
  }

  return (
    <>
      <div className="list">
        <div className="list_add">
          <button className="btn" onClick={AddRow}>Add</button>
        </div>
        {faqs.map(item =>
          <ListRow
            key={item._id}
            id={item._id}
            summary={item.summary}
            info={item.info}
            create={item.create}
            onChangeList={onChangeList}
          />
        )}
      </div>
    </>
  );
};

export default Admin;