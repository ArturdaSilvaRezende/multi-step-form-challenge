import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import StepFourContents from "./StepFourContents";
import * as C from "./style";

const StepFour = () => {
  const { currentStep } = useSelector((state: RootState) => state.currentStep);

  return (
    <C.StepFour
      className={`${
        currentStep === "stepFour" ? "fadeInRight" : "displayNone"
      }`}
    >
      <StepFourContents />
    </C.StepFour>
  );
};

export default StepFour;
