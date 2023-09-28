import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import {
  PickAddServiceAction,
  PickAddStorageAction,
  PickAddProfileAction,
} from "../../redux/PickAdd/action";
import StepThreeList from "./StepThreeList";
import IconCheckmark from "../../assets/images/icon-checkmark.svg";
import * as C from "./style";

const StepThreeContainer = () => {
  const dispatch = useDispatch();
  const togglePlan = useSelector((state: RootState) => state.plans.togglePlans);
  const InitialStepThreeItems = StepThreeList;
  const [stepThreeItems] = useState(InitialStepThreeItems);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const toggleCardSelection = (
    cardId: number,
    pickMonth: string,
    pickYear: string,
    type: string
  ) => {
    const newPickAdd = {
      id: cardId,
      pickMonth: pickMonth,
      pickYear: pickYear,
      type: type,
    };

    const PickAddDefaultValue = {
      pickMonth: "0",
      pickYear: "0",
      type: "",
    };

    if (selectedCards.includes(cardId)) {
      setSelectedCards(selectedCards.filter((id) => id !== cardId));
      if (type === "Online service") {
        dispatch(PickAddServiceAction(PickAddDefaultValue));
      }

      if (type === "Larger storage") {
        dispatch(PickAddStorageAction(PickAddDefaultValue));
      }

      if (type === "Customizable Profile") {
        dispatch(PickAddProfileAction(PickAddDefaultValue));
      }
    } else {
      setSelectedCards([...selectedCards, cardId]);
      if (type === "Online service") {
        dispatch(PickAddServiceAction(newPickAdd));
      }

      if (type === "Larger storage") {
        dispatch(PickAddStorageAction(newPickAdd));
      }

      if (type === "Customizable Profile") {
        dispatch(PickAddProfileAction(newPickAdd));
      }
    }
  };

  return (
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
            {togglePlan ? item.planYearly : item.planMonthly}
          </p>
        </C.StepThreeFigure>
      ))}
    </div>
  );
};

export default StepThreeContainer;
