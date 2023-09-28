import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import StepThreeContents from "./StepThreeContents";
import * as C from "./style";

const StepThree = () => {
  const { currentStep } = useSelector((state: RootState) => state.currentStep);

  return (
    <C.StepThree
      className={`${
        currentStep === "stepThree" ? "fadeInRight" : "displayNone"
      }`}
    >
      <StepThreeContents />
    </C.StepThree>
  );
};

export default StepThree;
