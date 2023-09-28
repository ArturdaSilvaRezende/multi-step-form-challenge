import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { currentStepAction } from "../../redux/CurrentStep/action";

//styles
import GlobalContainerButtons from "../../assets/style/GlobalContainerButtons";
import GlobalNextButton from "../../assets/style/GlobalNextButton";
import GlobalPrevButton from "../../assets/style/GlobalPrevButton";

const StepTwoButtons = () => {
  const dispatch = useDispatch();
  const finishingPlan = useSelector(
    (state: RootState) => state.plans.finishingPlan
  );

  const handleCurrentStep = useCallback(
    (currentStep: string) => {
      dispatch(currentStepAction(currentStep));
    },
    [dispatch]
  );

  const handleNextStep = () => {
    if (finishingPlan.id === null) {
      alert("Please, select a plan!");
    } else {
      handleCurrentStep("stepThree");
    }
  };

  const handlePrevStep = () => {
    handleCurrentStep("stepOne");
  };

  return (
    <GlobalContainerButtons className="steptwo__buttons">
      <GlobalPrevButton onClick={() => handlePrevStep()}>
        Go Back
      </GlobalPrevButton>
      <GlobalNextButton onClick={() => handleNextStep()}>
        Next Step
      </GlobalNextButton>
    </GlobalContainerButtons>
  );
};

export default StepTwoButtons;
