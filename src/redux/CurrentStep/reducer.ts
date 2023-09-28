import { CurrentStepActionType, Action } from "./actionType";

const initialState = {
  currentStep: "stepOne",
};

const currentStepReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CurrentStepActionType.CURRENT_STEP:
      return { ...state, currentStep: action.payload };
    default:
      return state;
  }
};

export default currentStepReducer;
