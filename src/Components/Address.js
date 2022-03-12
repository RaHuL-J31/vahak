import React from "react";

const Address = ({ labelValue, firstValue, secondValue, thirdValue = "" }) => {
  return (
    <div className="journey-details">
      <h6>{labelValue}</h6>
      <span>{firstValue}</span>
      <span>{secondValue}</span>
      <span>{thirdValue}</span>
    </div>
  );
};

export default Address;
