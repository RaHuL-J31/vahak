import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SourceDestination from "../Components/SourceDestination";

import AddBidAmmount from "./AddBidAmmount";
import * as Yup from "yup";
import VerifyOtp from "./VerifyOtp";
import VerifyOtp1 from "./VerifyOtp1";
import Summary from "./Summary";

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
      console.log("BID SUBMITTED");
      console.log(newdata);
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
    <VerifyOtp
      currentStep={currentStep}
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
    />,
    <Summary
      currentStep={currentStep}
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
    />,
  ];
  return <div className="App">{steps[currentStep]}</div>;
}
