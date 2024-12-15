const defaultState = {
  number: 0,
};

const numberActionType = {
  INC: "increment",
  DEC: "decrement",
};

const reducer = (state = defaultState, { type, payload }) => {
  if (type === numberActionType.INC) {
    return { number: state.number + payload };
  } else if (type === numberActionType.DEC) {
    return { number: state.number - payload };
  }
  return state;
};

export default reducer;
