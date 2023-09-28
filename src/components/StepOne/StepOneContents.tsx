import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { currentStepAction } from "../../redux/CurrentStep/action";

//components
import StepOneForm from "./StepOneForm";

//styles
import GlobalContainer from "../../assets/style/GlobalContainer";
import GlobalTitle from "../../assets/style/GlobalTitle";

const StepOneContents = () => {
  const dispatch = useDispatch();

  const handleCurrentStep = useCallback(() => {
    dispatch(currentStepAction("stepTwo"));
  }, [dispatch]);

  return (
    <GlobalContainer>
      <GlobalTitle>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </GlobalTitle>
      <StepOneForm handleCurrentStep={handleCurrentStep} />
    </GlobalContainer>
  );
};

export default StepOneContents;
