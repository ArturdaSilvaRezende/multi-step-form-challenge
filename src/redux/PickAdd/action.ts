import { pickAddType, PickAdd } from "./actionType";

export const PickAddServiceAction = (payload: PickAdd) => ({
  type: pickAddType.PICK_ADD_SERVICE,
  payload,
});

export const PickAddStorageAction = (payload: PickAdd) => ({
  type: pickAddType.PICK_ADD_STORAGE,
  payload,
});

export const PickAddProfileAction = (payload: PickAdd) => ({
  type: pickAddType.PICK_ADD_PROFILE,
  payload,
});
