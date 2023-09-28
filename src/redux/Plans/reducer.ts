import { Action, plansActionType, FinishingPlan } from "./actionType";

interface State {
  finishingPlan: FinishingPlan;
  togglePlans: boolean;
}

const initialState = {
  finishingPlan: {
    id: 1,
    type: "Arcade",
    month: "$9/mo",
    year: "$90/mo",
  },

  togglePlans: false,
};

const finishingPlanReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case plansActionType.FINISHING_PLAN:
      return {
        ...state,
        finishingPlan: { ...(action.payload as FinishingPlan) },
      };
    case plansActionType.TOGGLE_PLAN:
      return { ...state, togglePlans: !state.togglePlans };
    default:
      return state;
  }
};

export default finishingPlanReducer;
