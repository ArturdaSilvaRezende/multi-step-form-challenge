import GlobalContainer from "../../assets/style/GlobalContainer";
import GlobalTitle from "../../assets/style/GlobalTitle";
import StepTwoButtons from "./StepTwoButtons";
import StepTwoCards from "./StepTwoCards";
import StepTwoPlans from "./StepTwoPlans";

const StepTwoContents = () => {
  return (
    <>
      <GlobalContainer>
        <GlobalTitle>
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </GlobalTitle>
        <StepTwoCards />
        <StepTwoPlans />
      </GlobalContainer>
      <StepTwoButtons />
    </>
  );
};

export default StepTwoContents;
