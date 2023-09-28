import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import StepTwoContents from "./StepTwoContents";
import * as C from "./style";
import "./animation.css";

const StepTwo = () => {
  const { currentStep } = useSelector((state: RootState) => state.currentStep);

  return (
    <C.StepTwo
      className={`${currentStep === "stepTwo" ? "fadeInRight" : "displayNone"}`}
    >
      <StepTwoContents />
    </C.StepTwo>
  );
};

export default StepTwo;
