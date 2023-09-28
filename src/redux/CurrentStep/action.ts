import { CurrentStepActionType } from "./actionType";

export const currentStepAction = (payload: string) => ({
  type: CurrentStepActionType.CURRENT_STEP,
  payload,
});
