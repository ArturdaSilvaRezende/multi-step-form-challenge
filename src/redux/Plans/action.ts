import { plansActionType, FinishingPlan } from "./actionType";

export const selectPlanAction = (payload: FinishingPlan) => ({
  type: plansActionType.FINISHING_PLAN,
  payload,
});

export const togglePlanAction = (payload: boolean) => ({
  type: plansActionType.TOGGLE_PLAN,
  payload,
});
