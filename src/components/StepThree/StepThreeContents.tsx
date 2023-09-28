import GlobalContainer from "../../assets/style/GlobalContainer";
import GlobalTitle from "../../assets/style/GlobalTitle";
import StepThreeButtons from "./StepThreeButtons";
import StepThreeContainer from "./StepThreeContainer";

const StepThreeContents = () => {
  return (
    <>
      <GlobalContainer>
        <GlobalTitle>
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
        </GlobalTitle>

        <StepThreeContainer />
      </GlobalContainer>
      <StepThreeButtons />
    </>
  );
};

export default StepThreeContents;
