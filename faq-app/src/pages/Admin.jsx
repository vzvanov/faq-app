import React, { useEffect, useState } from "react";
import $api from "../axios";
import ListRow from "../components/ListRow";

const Admin = () => {
  const [faqslist, setFaqList] = useState([]);
  const [countItem, setCountItem] = useState(0);

  useEffect(() => {
    $api
      .get('/faqs')
      .then(({ data }) => setFaqList(data))
      .catch(error => {
        console.log(error);
      });
  }, [countItem])

  const AddRow = () => {
    const item = {
      _id: Date.now(),
      summary: '',
      info: '',
      create: true,
    }
    setFaqList([item, ...faqslist]);
  }

  const onDeleteItem = () => {
    setCountItem(countItem - 1);
  }

  return (
    <>
      <div className="list">
        <div className="list_add">
          <button className="btn" onClick={AddRow}>Add</button>
        </div>
        {faqslist.map(item =>
          <ListRow
            key={item._id}
            id={item._id}
            summary={item.summary}
            info={item.info}
            create={item.create}
            onDeleteItem={onDeleteItem}
          />
        )}
      </div>
    </>
  );
};

export default Admin;