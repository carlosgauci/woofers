export const cartReducer = (state, action) => {
  switch (action.type) {
    // Check for item in cart, if it's already there increase amount by 1, else add it to cart
    case "ADD_ITEM":
      if (
        state.find(
          item =>
            item.sku === action.item.sku &&
            item.description === action.item.description
        )
      ) {
        state[
          state.findIndex(
            item =>
              item.sku === action.item.sku &&
              item.description === action.item.description
          )
        ].quantity++
        return [...state]
      } else {
        return [...state, action.item]
      }

    // If the item quantity is over 1, decrease by 1, else remove it from cart
    case "REMOVE_ITEM":
      if (
        state.find(
          item =>
            item.variantIdentifier === action.item.variantIdentifier &&
            item.quantity > 1
        )
      ) {
        state[
          state.findIndex(
            item => item.variantIdentifier === action.item.variantIdentifier
          )
        ].quantity--
        return [...state]
      } else {
        return state.filter(
          item => item.variantIdentifier !== action.item.variantIdentifier
        )
      }

    default:
      return state
  }
}
