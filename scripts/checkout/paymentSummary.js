import { cart } from "../../data/cart-class.js";
import { getProduct } from "../../data/products.js";
import {getDeliveryOption} from "../../data/deliveryOption.js"
import { formatCurrency } from "../utilities/money.js";
import { checkoutQuantity } from "../utilities/checkoutHeader.js";
import { addOrder } from "../../data/orders.js";


export function renderPaymentSummary(){
    let productPriceCents = 0;
    let shippingPriceCents = 0;
    cart.cartItems.forEach(cartItem => {
        const product = getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;
        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents;
    });
    const totalBeforeTax = productPriceCents + shippingPriceCents;
    const taxCents = (totalBeforeTax)*(0.1);
    const totalCents = (taxCents + totalBeforeTax);
    const itemQuantity = checkoutQuantity();

    const paymentHTML = `
    
        <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
            <div>Items (${itemQuantity}):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
        </div>

        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">
                $${formatCurrency(shippingPriceCents)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">
                $${formatCurrency(totalBeforeTax)}</div>
        </div>

        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">
                $${formatCurrency(taxCents)}</div>
        </div>

        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">
                $${formatCurrency(totalCents)}</div>
        </div>

        <button class="place-order-button button-primary
        js-place-order">
            Place your order
        </button>
  
        `;
    document.querySelector('.js-payment-summary')
        .innerHTML = paymentHTML; 

    document.querySelector('.js-place-order')
        .addEventListener('click',async () => {
       try {
        const response = await fetch('https://supersimplebackend.dev/orders',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                cart: cart.cartItems
            })
        });
        const order = await response.json();
        addOrder(order);
        
       } catch (error) {
        console.log("unexpected error occured")
       }

       window.location.href = 'orders.html';
    });

}