import { combineReducers } from "redux";
import currentStepReducer from "./CurrentStep/reducer";
import finishingPlanReducer from "./Plans/reducer";
import PickAddReducer from "./PickAdd/reducer";

const rootReducer = combineReducers({
  currentStep: currentStepReducer,
  plans: finishingPlanReducer,
  pickAdd: PickAddReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
