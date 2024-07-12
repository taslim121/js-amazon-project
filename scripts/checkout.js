import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/backend-practice.js';
import { loadProducts, loadProductsfetched } from "../data/products.js";


async function loadPage(){
    await loadProductsfetched();
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();
/*Promise.all([
    loadProductsfetched(),
    new Promise((resolve) => {
        resolve();
    })
]
).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
    updateCartQunatity();
    
});

*/
