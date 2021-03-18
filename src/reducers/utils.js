export const addCartItem = (cartItems, item) => {
  const existingItem = cartItems.find((cartItem) => {
    return cartItem.id === item.id;
  });
  if (existingItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === item.id
        ? { ...cartItem, quantity: ++cartItem.quantity }
        : cartItem;
    });
  }
  return [...cartItems, { ...item, quantity: 1 }];
};
