export enum pickAddType {
  PICK_ADD_SERVICE = "pickAdd/service",
  PICK_ADD_STORAGE = "pickAdd/storage",
  PICK_ADD_PROFILE = "pickAdd/profile",
}

export interface PickAdd {
  pickMonth: string;
  pickYear: string;
  type: string;
}

interface PickAddServiceAction {
  type: string;
  payload: PickAdd;
}

interface PickAddStorageAction {
  type: string;
  payload: PickAdd;
}

interface PickAddProfileAction {
  type: string;
  payload: PickAdd;
}

export type Action =
  | PickAddServiceAction
  | PickAddStorageAction
  | PickAddProfileAction;
