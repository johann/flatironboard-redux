export default function rootReducer(
  state = { name: "johann", bankAccount: 0 },
  action
) {
  switch (action.type) {
    case "DEPOSIT":
      return Object.assign({}, state, {
        bankAccount: state.bankAccount + action.payload
      });
    case "WITHDRAW":
      return Object.assign({}, state, {
        bankAccount: state.bankAccount - action.payload
      });
    case "CHANGE_NAME":
      return Object.assign({}, state, { name: action.payload });
    default:
      return state;
  }
  // if (action.type == "DEPOSIT") {
  //   /// When we get an action we must never mutate state but we must return new state
  //   const newObj = Object.assign({}, state, {
  //     bankAccount: state.bankAccount + action.amount
  //   });
  //   return newObj;
  // } else if (action.type == "WITHDRAW") {
  //   const newObj = Object.assign({}, state, {
  //     bankAccount: state.bankAccount - action.amount
  //   });
  //   return newObj;
  // }
  // based on some kind of action we can return state differently
  /// based on what you tell the teller they can do different things
  /// DEPOSIT 50 -> Bank balance -> 50
  return state;
}
