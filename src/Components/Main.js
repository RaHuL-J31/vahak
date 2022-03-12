import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SourceDestination from "../Components/SourceDestination";

import AddBidAmmount from "../Components/AddBidAmmount";
import * as Yup from "yup";

export default function Main() {
  const [data, setData] = useState({
    source: "",
    destination: "",
    carType: "",
    passengers: "",
    bidPrice: "",
    rateNegotiable: "",
    phoneNo: "",
    name: "",
    remarks: "",
    getUpdatesWhatsapp: "",
    otp: "",
  });
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = (newdata, final = false) => {
    setData((prev) => ({ ...prev, ...newdata }));
    if (final) {
      console.log("End", newdata);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevStep = (newdata) => {
    setData((prev) => ({ ...prev, ...newdata }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <SourceDestination
      currentStep={currentStep}
      next={handleNextStep}
      data={data}
    />,
    <AddBidAmmount
      currentStep={currentStep}
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
    />,
  ];
  return <div className="App">{steps[currentStep]}</div>;
}
