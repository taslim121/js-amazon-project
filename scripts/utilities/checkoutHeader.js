import { cart } from "../../data/cart-class.js";
export function checkoutQuantity(){

    let cartQuantity = 0;
    cart.cartItems.forEach( cartItem=>{
    cartQuantity += cartItem.quantity;
    });
    document.querySelector('.js-checkout-cart-quantity').innerHTML = `${cartQuantity} items`;
    return cartQuantity;
}