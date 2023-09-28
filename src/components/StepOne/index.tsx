import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import StepOneContents from "./StepOneContents";
import * as C from "./style";

const StepOne = () => {
  const { currentStep } = useSelector((state: RootState) => state.currentStep);

  return (
    <C.StepOne
      className={`${currentStep === "stepOne" ? "fadeInRight" : "displayNone"}`}
    >
      <StepOneContents />
    </C.StepOne>
  );
};

export default StepOne;
