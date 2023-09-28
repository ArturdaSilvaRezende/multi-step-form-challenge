import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { selectPlanAction } from "../../redux/Plans/action";
import StepTwoList from "./StepTwoList";

const StepTwoCards = () => {
  const dispatch = useDispatch();
  const InitialStepTwoItems = StepTwoList;
  const [stepTwoItems] = useState(InitialStepTwoItems);
  const togglePlan = useSelector((state: RootState) => state.plans.togglePlans);
  const finishingPlan = useSelector(
    (state: RootState) => state.plans.finishingPlan
  );
  const activePlanClass = togglePlan ? "fadeIn" : "";

  const handleActiveCard = (
    cardId: number,
    type: string,
    month: string,
    year: string
  ) => {
    const newFinishingPlan = {
      id: cardId,
      type: type,
      month: month,
      year: year,
    };
    dispatch(selectPlanAction(newFinishingPlan));

    if (!finishingPlan.id) {
      dispatch(selectPlanAction(newFinishingPlan));
    }
  };

  return (
    <div className="steptwo__cards">
      {stepTwoItems.map((item) => (
        <figure
          className={`steptwo__item ${
            item.id === finishingPlan.id ? "active" : ""
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
              {togglePlan ? item.yearly : item.monthly}
            </p>
            <p className={`steptwo__description-free ${activePlanClass}`}>
              {togglePlan ? item.monthlyFree : null}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default StepTwoCards;
