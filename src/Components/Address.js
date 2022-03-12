import React from "react";

const Address = ({ source, destination, passengers, cartype }) => {
  return (
    <div className="journey-details">
      <h6>JOURNEY DETAILS</h6>
      <span>
        {source} - {destination}
      </span>
      <span>
        {passengers} persons,{cartype}
      </span>
    </div>
  );
};

export default Address;
