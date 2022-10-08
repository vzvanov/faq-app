import React from "react";
import Detail from "./Detail";

const DetailsList = ({ details }) => {
  return (
    <>
      {details.map(item =>
        <Detail
          key={item._id}
          summary={item.summary}
          info={item.info}
        />
      )}
    </>
  );
};

export default DetailsList;