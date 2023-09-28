import GlobalContainer from "../../assets/style/GlobalContainer";
import GlobalTitle from "../../assets/style/GlobalTitle";
import StepFourButtons from "./StepFourButtons";
import StepFourContainer from "./StepFourContainer";

const StepFourContents = () => {
  return (
    <>
      <GlobalContainer>
        <GlobalTitle>
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
        </GlobalTitle>

        <StepFourContainer />
      </GlobalContainer>
      <StepFourButtons />
    </>
  );
};

export default StepFourContents;
