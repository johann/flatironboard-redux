export function deposit(amount) {
  return {
    type: "DEPOSIT",
    payload: amount
  };
}

export function withdraw(amount) {
  return {
    type: "WITHDRAW",
    payload: amount
  };
}

export function changeName(name) {
  return {
    type: "CHANGE_NAME",
    payload: name
  };
}
