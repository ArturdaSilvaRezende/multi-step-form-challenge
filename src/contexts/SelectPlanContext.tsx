import { ReactNode, useState, createContext } from "react";

interface Props {
  children: ReactNode;
}

interface FinishingPlan {
  type: string;
  month: string;
  year: string;
}

interface PickAddOns {
  pickMonth: string;
  pickYear: string;
  type: string;
}

interface StateContext {
  selectPlan: boolean;
  finishingPlan: FinishingPlan;
  currentStep: string;
  pickAddService: PickAddOns;
  pickAddStorage: PickAddOns;
  pickAddProfile: PickAddOns;
  SetSelectPlan: (props: boolean) => void;
  SetFinishingPlan: (props: FinishingPlan) => void;
  SetCurrentStep: (props: string) => void;
  SetPickAddService: (props: PickAddOns) => void;
  SetPickAddStorage: (props: PickAddOns) => void;
  SetPickAddProfile: (props: PickAddOns) => void;
}

export const SelectPlanContext = createContext<StateContext | undefined>(
  undefined
);

const SelectPlanProvider = ({ children }: Props) => {
  const [selectPlan, SetSelectPlan] = useState(false);
  const [currentStep, SetCurrentStep] = useState("stepOne");
  const [finishingPlan, SetFinishingPlan] = useState({
    type: "Arcade",
    month: "$9/mo",
    year: "$90/mo",
  });

  const [pickAddService, SetPickAddService] = useState({
    pickMonth: "0",
    pickYear: "0",
    type: "Online service",
  });

  const [pickAddStorage, SetPickAddStorage] = useState({
    pickMonth: "0",
    pickYear: "0",
    type: "Larger storage",
  });

  const [pickAddProfile, SetPickAddProfile] = useState({
    pickMonth: "0",
    pickYear: "0",
    type: "Customizable Profile",
  });

  return (
    <SelectPlanContext.Provider
      value={{
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
      }}
    >
      {children}
    </SelectPlanContext.Provider>
  );
};

export default SelectPlanProvider;
