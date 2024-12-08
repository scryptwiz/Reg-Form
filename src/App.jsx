import React, {useState} from "react";
import StepNavigation from "./components/StepSection";
import YourInfo from "./components/YourInfo";
import PlanSelection from "./components/PlanSection";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingCycle, setBillingCycle] = useState("Monthly");
  const [formData, setFormData] = useState({
    yourInfo: {name: "", email: "", phone: ""},
    selectedPlan: {plan: "Arcade", billingCycle: "Monthly"},
    addOns: [],
  });

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleFormDataChange = (stepKey, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [stepKey]: data,
    }));
  };

  const submitForm = () => {
    console.log(formData);
    alert("Form submitted!")
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <YourInfo
            data={formData.yourInfo}
            onChange={(data) => handleFormDataChange("yourInfo", data)}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <PlanSelection
            data={formData.selectedPlan}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            billingCycle={billingCycle}
            setBillingCycle={setBillingCycle}
            onChange={(data) => handleFormDataChange("selectedPlan", data)}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <AddOns
            data={formData.addOns}
            onChange={(data) => handleFormDataChange("addOns", data)}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <Summary
            data={formData}
            onBack={handleBack}
            onSubmit={submitForm}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-4xl p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Sidebar for Desktop */}
          <div className="hidden md:block col-span-1">
            <StepNavigation currentStep={currentStep} />
          </div>

          {/* Mobile View: Show Navigation on Top */}
          <div className="block md:hidden mb-4">
            <StepNavigation currentStep={currentStep} />
          </div>

          {/* Main Content */}
          <div className="col-span-1 md:col-span-3">{renderCurrentStep()}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
