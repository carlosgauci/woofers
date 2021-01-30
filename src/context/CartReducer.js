export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.find(item => item.sku === action.item.sku)) {
        state[state.findIndex(item => item.sku === action.item.sku)].quantity++
        return [...state]
      } else {
        return [...state, action.item]
      }

    case "REMOVE_ITEM":
      if (
        state.find(item => item.sku === action.item.sku && item.quantity > 1)
      ) {
        state[state.findIndex(item => item.sku === action.item.sku)].quantity--
        return [...state]
      } else {
        return state.filter(item => item.sku !== action.item.sku)
      }

    default:
      return state
  }
}
