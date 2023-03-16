import { INC, DEC } from "./actionType";
const initValue = {
  a: 0
};

export const reducer = (state = initValue, action) => {
  switch (action.type) {
    case INC: {
      return {
        ...state,
        a: state.a + 1
      };
    }
    case DEC: {
      return {
        ...state,
        a: state.a - 1
      };
    }
    default: {
      return state;
    }
  }
};
