import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { togglePlanAction } from "../../redux/Plans/action";
import * as C from "./style";
import StepFourTotalPrice from "./StepFourTotalPrice";

const StepFourContainer = () => {
  const dispatch = useDispatch();
  const togglePlan = useSelector((state: RootState) => state.plans.togglePlans);

  const pickAddService = useSelector(
    (state: RootState) => state.pickAdd.pickAddService
  );
  const pickAddServiceStorage = useSelector(
    (state: RootState) => state.pickAdd.pickAddStorage
  );

  const finishingPlan = useSelector(
    (state: RootState) => state.plans.finishingPlan
  );

  const handleTogglePlan = useCallback(() => {
    dispatch(togglePlanAction(togglePlan));
  }, [dispatch, togglePlan]);

  return (
    <C.StepFourContainer>
      <div className="stepfour__table">
        <div className="stepfour__type">
          <div className="stepfour__change-plan">
            <h2>
              <span>{finishingPlan.type}</span>
              <span>({togglePlan ? "Yearly" : "Monthly"})</span>
            </h2>
            <button onClick={handleTogglePlan}>Change</button>
          </div>

          <h2 className="stepfour__price">
            {togglePlan ? finishingPlan.year : finishingPlan.month}
          </h2>
        </div>

        <hr />

        <div className="stepfour__service">
          <p>Oline service</p>
          <p>
            {togglePlan ? pickAddService.pickYear : pickAddService.pickMonth}
          </p>
        </div>
        <div className="stepfour__storage">
          <p>Larger storage</p>
          <p>
            {togglePlan
              ? pickAddServiceStorage.pickYear
              : pickAddServiceStorage.pickMonth}
          </p>
        </div>
      </div>
      <div className="stepfour__total">
        <p>
          <span>Total </span>
          <span>(per {togglePlan ? "year" : "month"})</span>
        </p>
        <StepFourTotalPrice />
      </div>
    </C.StepFourContainer>
  );
};

export default StepFourContainer;
