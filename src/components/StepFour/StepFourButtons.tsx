import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { currentStepAction } from "../../redux/CurrentStep/action";

//styles
import GlobalContainerButtons from "../../assets/style/GlobalContainerButtons";
import GlobalPrevButton from "../../assets/style/GlobalPrevButton";

const StepFourButtons = () => {
  const dispatch = useDispatch();

  const handleCurrentStep = useCallback(
    (currentStep: string) => {
      dispatch(currentStepAction(currentStep));
    },
    [dispatch]
  );

  const handleNextStep = () => {
    handleCurrentStep("stepFive");
  };

  const handlePrevStep = () => {
    handleCurrentStep("stepThree");
  };

  return (
    <GlobalContainerButtons className="stepfour__buttons">
      <GlobalPrevButton onClick={() => handlePrevStep()}>
        Go Back
      </GlobalPrevButton>
      <button className="button__confirm" onClick={() => handleNextStep()}>
        Confirm
      </button>
    </GlobalContainerButtons>
  );
};

export default StepFourButtons;
