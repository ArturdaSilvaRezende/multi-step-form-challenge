import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { currentStepAction } from "../../redux/CurrentStep/action";

//styles
import GlobalContainerButtons from "../../assets/style/GlobalContainerButtons";
import GlobalNextButton from "../../assets/style/GlobalNextButton";
import GlobalPrevButton from "../../assets/style/GlobalPrevButton";

const StepThreeButtons = () => {
  const dispatch = useDispatch();

  const handleCurrentStep = useCallback(
    (currentStep: string) => {
      dispatch(currentStepAction(currentStep));
    },
    [dispatch]
  );

  const handlePrevStep = () => {
    handleCurrentStep("stepTwo");
  };

  const handleNextStep = () => {
    handleCurrentStep("stepFour");
  };

  return (
    <GlobalContainerButtons className="stepthree__buttons">
      <GlobalPrevButton onClick={() => handlePrevStep()}>
        Go Back
      </GlobalPrevButton>
      <GlobalNextButton onClick={() => handleNextStep()}>
        Next Step
      </GlobalNextButton>
    </GlobalContainerButtons>
  );
};

export default StepThreeButtons;
