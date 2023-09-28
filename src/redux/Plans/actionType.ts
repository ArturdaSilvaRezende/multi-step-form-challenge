export enum plansActionType {
  FINISHING_PLAN = "plans/finishingPlan",
  TOGGLE_PLAN = "plans/togglePlan",
}

export interface FinishingPlan {
  id: number;
  type: string;
  month: string;
  year: string;
}

interface selectPlanAction {
  type: string;
  payload: FinishingPlan;
}

interface togglePlanAction {
  type: string;
  payload: boolean;
}

export type Action = selectPlanAction | togglePlanAction;
