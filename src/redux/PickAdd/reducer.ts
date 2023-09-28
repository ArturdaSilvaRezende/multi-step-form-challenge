import { pickAddType, PickAdd, Action } from "./actionType";

interface State {
  pickAddService: PickAdd;
  pickAddProfile: PickAdd;
  pickAddStorage: PickAdd;
}

const initialState = {
  pickAddService: {
    pickMonth: "0",
    pickYear: "0",
    type: "Online service",
  },
  pickAddProfile: {
    pickMonth: "0",
    pickYear: "0",
    type: "Customizable Profile",
  },
  pickAddStorage: {
    pickMonth: "0",
    pickYear: "0",
    type: "Larger storage",
  },
};

const PickAddReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case pickAddType.PICK_ADD_SERVICE:
      return { ...state, pickAddService: { ...action.payload } };
    case pickAddType.PICK_ADD_PROFILE:
      return { ...state, pickAddProfile: { ...action.payload } };
    case pickAddType.PICK_ADD_STORAGE:
      return { ...state, pickAddStorage: { ...action.payload } };
    default:
      return state;
  }
};

export default PickAddReducer;
