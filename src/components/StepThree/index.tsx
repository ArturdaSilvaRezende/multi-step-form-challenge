import { useState } from "react";
import usePlans from "../../hooks/usePlans";
import StepThreeList from "./StepThreeList";
import IconCheckmark from "../../assets/images/icon-checkmark.svg";
import GlobalContainerButtons from "../../assets/style/GlobalContainerButtons";
import GlobalNextButton from "../../assets/style/GlobalNextButton";
import GlobalPrevButton from "../../assets/style/GlobalPrevButton";
import GlobalTitle from "../../assets/style/GlobalTitle";
import GlobalContainer from "../../assets/style/GlobalContainer";
import * as C from "./style";

const StepThree = () => {
  const {
    selectPlan,
    currentStep,

    SetCurrentStep,
    SetPickAddService,
    SetPickAddStorage,
    SetPickAddProfile,
  } = usePlans();
  const InitialStepThreeItems = StepThreeList;
  const [stepThreeItems] = useState(InitialStepThreeItems);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const toggleCardSelection = (
    cardId: number,
    pickMonth: string,
    pickYear: string,
    type: string
  ) => {
    if (selectedCards.includes(cardId)) {
      setSelectedCards(selectedCards.filter((id) => id !== cardId));
      if (type === "Online service") {
        SetPickAddService({
          pickMonth: "0",
          pickYear: "0",
          type: "",
        });
      }

      if (type === "Larger storage") {
        SetPickAddStorage({
          pickMonth: "0",
          pickYear: "0",
          type: "",
        });
      }

      if (type === "Customizable Profile") {
        SetPickAddProfile({
          pickMonth: "0",
          pickYear: "0",
          type: "",
        });
      }
    } else {
      setSelectedCards([...selectedCards, cardId]);
      if (type === "Online service") {
        SetPickAddService({
          pickMonth: pickMonth,
          pickYear: pickYear,
          type: type,
        });
      }

      if (type === "Larger storage") {
        SetPickAddStorage({
          pickMonth: pickMonth,
          pickYear: pickYear,
          type: type,
        });
      }

      if (type === "Customizable Profile") {
        SetPickAddProfile({
          pickMonth: pickMonth,
          pickYear: pickYear,
          type: type,
        });
      }
    }
  };

  const handlePrevStep = () => {
    SetCurrentStep("stepTwo");
  };

  const handleNextStep = () => {
    SetCurrentStep("stepFour");
  };

  return (
    <C.StepThree
      className={`${
        currentStep === "stepThree" ? "fadeInRight" : "displayNone"
      }`}
    >
      <GlobalContainer>
        <GlobalTitle>
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
        </GlobalTitle>

        <div className="stepthree__container">
          {stepThreeItems.map((item) => (
            <C.StepThreeFigure
              onClick={() =>
                toggleCardSelection(
                  item.id,
                  item.planMonthly,
                  item.planYearly,
                  item.type
                )
              }
              key={item.id}
              $cardid={item.id}
              $selectedcard={selectedCards}
            >
              <div className="stepthree__card-contents">
                <div className="stepthree__card-check">
                  <img src={IconCheckmark} alt="icon-check-mark" />
                </div>

                <figcaption className="stepthree__card-description">
                  <h2>{item.type}</h2>
                  <p>{item.description}</p>
                </figcaption>
              </div>
              <p className="stepthree__plans">
                {selectPlan ? item.planYearly : item.planMonthly}
              </p>
            </C.StepThreeFigure>
          ))}
        </div>
      </GlobalContainer>
      <GlobalContainerButtons className="stepthree__buttons">
        <GlobalPrevButton onClick={() => handlePrevStep()}>
          Go Back
        </GlobalPrevButton>
        <GlobalNextButton onClick={() => handleNextStep()}>
          Next Step
        </GlobalNextButton>
      </GlobalContainerButtons>
    </C.StepThree>
  );
};

export default StepThree;
