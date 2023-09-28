export enum CurrentStepActionType {
  CURRENT_STEP = "step/currentStep",
}

interface currentStepAction {
  type: string;
  payload: string;
}

export type Action = currentStepAction;
