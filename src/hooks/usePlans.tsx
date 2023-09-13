import { useContext } from "react";
import { SelectPlanContext } from "../contexts/SelectPlanContext";

const usePlans = () => {
  const context = useContext(SelectPlanContext);
  if (!context)
    throw new Error("useCount must be used within a SelectPlanContext");
  const {
    selectPlan,
    finishingPlan,
    currentStep,
    pickAddService,
    pickAddStorage,
    pickAddProfile,
    SetSelectPlan,
    SetFinishingPlan,
    SetCurrentStep,
    SetPickAddService,
    SetPickAddStorage,
    SetPickAddProfile,
  } = context;
  return {
    selectPlan,
    finishingPlan,
    currentStep,
    pickAddService,
    pickAddStorage,
    pickAddProfile,
    SetSelectPlan,
    SetFinishingPlan,
    SetCurrentStep,
    SetPickAddService,
    SetPickAddStorage,
    SetPickAddProfile,
  };
};

export default usePlans;
