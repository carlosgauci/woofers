export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.find(item => item.id === action.item.id)) {
        state[state.findIndex(item => item.id === action.item.id)].amount++
        return [...state]
      } else {
        return [...state, action.item]
      }

    case "REMOVE_ITEM":
      if (state.find(item => item.id === action.item.id && item.amount > 1)) {
        state[state.findIndex(item => item.id === action.item.id)].amount--
        return [...state]
      } else {
        return state.filter(item => item.id !== action.item.id)
      }

    default:
      return state
  }
}
