import usePlans from "../../hooks/usePlans";
import GlobalContainer from "../../assets/style/GlobalContainer";
import GlobalContainerButtons from "../../assets/style/GlobalContainerButtons";
import GlobalPrevButton from "../../assets/style/GlobalPrevButton";
import GlobalTitle from "../../assets/style/GlobalTitle";
import * as C from "./style";

const StepFour = () => {
  const {
    finishingPlan,
    selectPlan,
    currentStep,
    pickAddService,
    pickAddStorage,
    pickAddProfile,
    SetSelectPlan,
    SetCurrentStep,
  } = usePlans();
  let totalPriceMonth = "";
  let totalPriceYear = "";

  const handleChangePlan = () => {
    SetSelectPlan(!selectPlan);
  };

  const sunPlanMonth = (
    str1: string,
    str2: string,
    str3: string,
    str4: string
  ): string => {
    const plan = parseFloat(str1.replace("$", "").replace("/mo", ""));
    const services = parseFloat(str2.replace("+$", "").replace("/mo", ""));
    const storage = parseFloat(str3.replace("+$", "").replace("/mo", ""));
    const profile = parseFloat(str4.replace("+$", "").replace("/mo", ""));

    if (!isNaN(plan) && !isNaN(services) && !isNaN(storage)) {
      const resultado = plan + profile + services + storage;
      return `+$${resultado}/mo`;
    } else {
      return "It's not the number";
    }
  };

  const sunPlanYear = (
    str1: string,
    str2: string,
    str3: string,
    str4: string
  ): string => {
    const plan = parseFloat(str1.replace("$", "").replace("/yr", ""));
    const services = parseFloat(str2.replace("+$", "").replace("/yr", ""));
    const storage = parseFloat(str3.replace("+$", "").replace("/yr", ""));
    const profile = parseFloat(str4.replace("+$", "").replace("/yr", ""));

    if (!isNaN(plan) && !isNaN(services) && !isNaN(storage)) {
      const resultado = plan + profile + services + storage;
      return `+$${resultado}/yr`;
    } else {
      return "It's not the number";
    }
  };

  totalPriceMonth = sunPlanMonth(
    finishingPlan.month,
    pickAddProfile.pickMonth,
    pickAddService.pickMonth,
    pickAddStorage.pickMonth
  );
  totalPriceYear = sunPlanYear(
    finishingPlan.year,
    pickAddProfile.pickYear,
    pickAddService.pickYear,
    pickAddStorage.pickYear
  );

  const handleNextStep = () => {
    SetCurrentStep("stepFive");
  };

  const handlePrevStep = () => {
    SetCurrentStep("stepThree");
  };

  return (
    <C.StepFour
      className={`${
        currentStep === "stepFour" ? "fadeInRight" : "displayNone"
      }`}
    >
      <GlobalContainer>
        <GlobalTitle>
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
        </GlobalTitle>

        <C.StepFourContainer>
          <div className="stepfour__table">
            <div className="stepfour__type">
              <div className="stepfour__change-plan">
                <h2>
                  <span>{finishingPlan.type}</span>
                  <span>({selectPlan ? "Yearly" : "Monthly"})</span>
                </h2>
                <button onClick={() => handleChangePlan()}>Change</button>
              </div>

              <h2 className="stepfour__price">
                {selectPlan ? finishingPlan.year : finishingPlan.month}
              </h2>
            </div>

            <hr />

            <div className="stepfour__service">
              <p>Oline service</p>
              <p>
                {selectPlan
                  ? pickAddService.pickYear
                  : pickAddService.pickMonth}
              </p>
            </div>
            <div className="stepfour__storage">
              <p>Larger storage</p>
              <p>
                {selectPlan
                  ? pickAddStorage.pickYear
                  : pickAddStorage.pickMonth}
              </p>
            </div>
          </div>
          <div className="stepfour__total">
            <p>
              <span>Total </span>
              <span>(per {selectPlan ? "year" : "month"})</span>
            </p>
            <p>{selectPlan ? totalPriceYear : totalPriceMonth}</p>
          </div>
        </C.StepFourContainer>
      </GlobalContainer>
      <GlobalContainerButtons className="stepfour__buttons">
        <GlobalPrevButton onClick={() => handlePrevStep()}>
          Go Back
        </GlobalPrevButton>
        <button className="button__confirm" onClick={() => handleNextStep()}>
          Confirm
        </button>
      </GlobalContainerButtons>
    </C.StepFour>
  );
};

export default StepFour;
