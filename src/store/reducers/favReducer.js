const INITIAL_STATE = {
  favs: [],
  counter: 0,
};
export default function favReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET-FAV":
      return {
        favs: [...state.favs, action.payload],
        counter: state.counter + 1,
      };

    case "REMOVE-FAV":
      return {
        ...state,favs:[...state.favs.filter((fav)=>fav!==action.payload)],
        counter: state.counter - 1,
      };

    default:
      return { ...state };
  }
}
