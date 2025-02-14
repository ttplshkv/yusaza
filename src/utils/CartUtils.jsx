export const getProductQuantity = (cart, product) => {
    const currentProductInCart = cart.find(item => item.id === product.id);
    return currentProductInCart ? currentProductInCart.quantity : 0;
};