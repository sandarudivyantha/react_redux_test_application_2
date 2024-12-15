const defaultState = {
  number: 0,
};

const numberActionType = {
  INC: "increment",
  DEC: "decrement",
};

export const numberIncrement = (payload = 1) => ({
  type: numberActionType.INC,
  payload,
});

export const numberDecrement = (payload = 1) => ({
  type: numberActionType.DEC,
  payload,
});

const reducer = (state = defaultState, { type, payload }) => {
  if (type === numberActionType.INC) {
    return { number: state.number + payload };
  } else if (type === numberActionType.DEC) {
    return { number: state.number - payload };
  }
  return state;
};

export default reducer;
