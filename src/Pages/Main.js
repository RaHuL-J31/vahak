import { useState } from "react";
import SourceDestination from "./SourceDestination";

import AddBidAmmount from "./AddBidAmmount";

import VerifyOtp from "./VerifyOtp";
import Summary from "../Components/Summary";

export default function Main() {
  const [data, setData] = useState({
    source: "",
    destination: "",
    carType: "",
    passengers: "",
    bidPrice: "",
    phoneNo: "",
    name: "",
    remarks: "",
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
