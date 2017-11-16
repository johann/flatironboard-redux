export default function bookReducer(
  state = { books: ["Lord of the Rings"], selectedBook: "Lord of the Flies" },
  action
) {
  switch (action.type) {
    case "ADD_BOOK":
      return Object.assign({}, state, {
        books: [...state.books, action.payload]
      });
    case "REMOVE_BOOK":
      break;
    default:
      return state;
  }
}
