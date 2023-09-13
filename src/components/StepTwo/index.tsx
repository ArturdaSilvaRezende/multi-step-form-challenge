import { useState } from "react";
import usePlans from "../../hooks/usePlans";
import StepTwoList from "./StepTwoList";
import GlobalContainer from "../../assets/style/GlobalContainer";
import GlobalContainerButtons from "../../assets/style/GlobalContainerButtons";
import GlobalNextButton from "../../assets/style/GlobalNextButton";
import GlobalPrevButton from "../../assets/style/GlobalPrevButton";
import GlobalTitle from "../../assets/style/GlobalTitle";
import * as C from "./style";
import "./animation.css";

const StepTwo = () => {
  const {
    selectPlan,
    currentStep,
    SetSelectPlan,
    SetFinishingPlan,
    SetCurrentStep,
  } = usePlans();
  const InitialStepTwoItems = StepTwoList;
  const [stepTwoItems] = useState(InitialStepTwoItems);
  const [activeCard, setActiveCard] = useState(1);
  const activePlanClass = selectPlan ? "fadeIn" : "";

  const handleActiveCard = (
    cardId: number,
    type: string,
    month: string,
    year: string
  ) => {
    setActiveCard(cardId);
    SetFinishingPlan({ type: type, month: month, year: year });

    if (!activeCard) {
      setActiveCard(cardId);
      SetFinishingPlan({ type: type, month: month, year: year });
    }
  };

  const handleActivePlan = () => {
    SetSelectPlan(!selectPlan);
  };

  const handleNextStep = () => {
    if (activeCard === null) {
      alert("Please, select a plan!");
    } else {
      SetCurrentStep("stepThree");
    }
  };

  const handlePrevStep = () => {
    SetCurrentStep("stepOne");
  };

  return (
    <C.StepTwo
      className={`${currentStep === "stepTwo" ? "fadeInRight" : "displayNone"}`}
    >
      <GlobalContainer>
        <GlobalTitle>
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </GlobalTitle>
        <div className="steptwo__cards">
          {stepTwoItems.map((item) => (
            <figure
              className={`steptwo__item ${
                item.id === activeCard ? "active" : ""
              }`}
              key={item.id}
              onClick={() =>
                handleActiveCard(item.id, item.type, item.monthly, item.yearly)
              }
            >
              <img src={item.icon} alt={item.type} />
              <figcaption className="steptwo__description">
                <h2 className="steptwo__description-title">{item.type}</h2>
                <p className={`steptwo__description-month ${activePlanClass}`}>
                  {selectPlan ? item.yearly : item.monthly}
                </p>
                <p className={`steptwo__description-free ${activePlanClass}`}>
                  {selectPlan ? item.monthlyFree : null}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="steptwo__plans">
          <p
            className={`${selectPlan ? "colorActiveGray" : "colorActiveBlue"}`}
          >
            Monthly
          </p>
          <button onClick={() => handleActivePlan()}>
            <span className={`${selectPlan ? "moveRight" : "moveLeft"}`}></span>
          </button>
          <p
            className={`${selectPlan ? "colorActiveBlue" : "colorActiveGray"}`}
          >
            Yearly
          </p>
        </div>
      </GlobalContainer>
      <GlobalContainerButtons className="steptwo__buttons">
        <GlobalPrevButton onClick={() => handlePrevStep()}>
          Go Back
        </GlobalPrevButton>
        <GlobalNextButton onClick={() => handleNextStep()}>
          Next Step
        </GlobalNextButton>
      </GlobalContainerButtons>
    </C.StepTwo>
  );
};

export default StepTwo;
