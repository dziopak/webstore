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

export const reduceItemQuantity = (cartItems, item) => {
  const existing = cartItems.find(cartItem => cartItem.id === item.id);
  if (existing && existing.quantity > 1) {
    return cartItems.map(cartItem =>
      cartItem.id === existing.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  return cartItems;
};
