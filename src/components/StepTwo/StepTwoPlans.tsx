import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { togglePlanAction } from "../../redux/Plans/action";

const StepTwoPlans = () => {
  const dispatch = useDispatch();
  const togglePlan = useSelector((state: RootState) => state.plans.togglePlans);

  const handleTogglePlan = useCallback(() => {
    dispatch(togglePlanAction(togglePlan));
  }, [dispatch, togglePlan]);

  return (
    <div className="steptwo__plans">
      <p className={`${togglePlan ? "colorActiveGray" : "colorActiveBlue"}`}>
        Monthly
      </p>
      <button onClick={handleTogglePlan}>
        <span className={`${togglePlan ? "moveRight" : "moveLeft"}`}></span>
      </button>
      <p className={`${togglePlan ? "colorActiveBlue" : "colorActiveGray"}`}>
        Yearly
      </p>
    </div>
  );
};

export default StepTwoPlans;
