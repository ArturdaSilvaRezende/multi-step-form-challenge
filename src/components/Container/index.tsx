import Aside from "../Aside";
import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import StepThree from "../StepThree";
import StepFour from "../StepFour";
import StepFive from "../StepFive";

import * as C from "./style";

const Container = () => {
  return (
    <C.Container>
      <Aside />
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
      <StepFive />
    </C.Container>
  );
};

export default Container;
