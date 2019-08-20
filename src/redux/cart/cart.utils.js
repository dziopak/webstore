export const addItemToCart = (cartItems, newItem) => {
  const existing = cartItems.find(cartItem => cartItem.id === newItem.id);

  if (existing) {
    return cartItems.map(cartItem =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  console.log(existing);
  return [...cartItems, { ...newItem, quantity: 1 }];
};
