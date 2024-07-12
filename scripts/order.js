import {formatCurrency} from './utilities/money.js';
import {orders} from '../data/orders.js';
import {getProduct, loadProductsfetched} from '../data/products.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {cart} from '../data/cart-class.js';


export function orderedProducts(){
    let orderdHTML = '';
    orders.forEach((order)=>{
        const orderTime = dayjs(order.orderTime).format('MMMM D');
     orderdHTML+=`<div class="order-container">
           
           <div class="order-header">
             <div class="order-header-left-section">
               <div class="order-date">
                 <div class="order-header-label">Order Placed:</div>
                 <div>${orderTime}</div>
               </div>
               <div class="order-total">
                 <div class="order-header-label">Total:</div>
                 <div>$${formatCurrency(order.totalCostCents)}</div>
               </div>
             </div>
 
             <div class="order-header-right-section">
               <div class="order-header-label">Order ID:</div>
               <div>${order.id}</div>
             </div>
           </div>
 
           <div class="order-details-grid">
 
            ${Products(order.products,order.id)}
           
           </div>
         </div>`
    }) 

    function Products(products,id){
            let html=``;
            products.forEach((product)=>{
                const productId = product.productId;
                const matchingProduct = getProduct(productId);
                html+= `<div class="product-image-container">
                    <img src="${matchingProduct.image}">
                    </div>

                    <div class="product-details">
                    <div class="product-name">
                        ${matchingProduct.name}
                    </div>
                    <div class="product-delivery-date">
                        Arriving on: ${
                            dayjs(product.estimatedDeliveryTime).format('MMMM D')
                        }
                    </div>
                    <div class="product-quantity">
                        Quantity: ${product.quantity}
                    </div>
                    <button class="buy-again-button button-primary js-buy-again" data-product-id = "${productId}">
                        <img class="buy-again-icon" src="images/icons/buy-again.png">
                        <span class="buy-again-message">Buy it again</span>
                    </button>
                    </div>

                    <div class="product-actions">
                    <a href="tracking.html?orderId=${id}&productId=${productId}">
                        <button class="track-package-button button-secondary">
                        Track package
                        </button>
                    </a>
                    </div>`
                })
                return html;
    }
    document.querySelector('.js-ordered-grid').innerHTML = orderdHTML;

    document.querySelectorAll('.js-buy-again').forEach((button) => {
        button.addEventListener('click', () => {
          cart.addtoCart(button.dataset.productId);
    
          // (Optional) display a message that the product was added,
          // then change it back after a second.
          button.innerHTML = 'Added';
          setTimeout(() => {
            button.innerHTML = `
              <img class="buy-again-icon" src="images/icons/buy-again.png">
              <span class="buy-again-message">Buy it again</span>
            `;
          }, 1000);
        });
      });
 }

 async function loadPage(){
    await loadProductsfetched();
    orderedProducts();
 }
 loadPage();
 
