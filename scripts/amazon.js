import {cart} from '../data/cart-class.js';
import {products,loadProducts} from '../data/products.js';
import { formatCurrency } from './utilities/money.js';

loadProducts(renderProductsGrid);
export function updateCartQunatity(){
    let cartQuantity = 0 || null;
    cart.cartItems.forEach( cartItem =>{
        cartQuantity += cartItem.quantity;
    });
    document.querySelector('.js-cart-quantity')
        .innerText = cartQuantity;   
   
}

function renderProductsGrid(){
updateCartQunatity();

let productsHTML = '';
const url = new URL(window.location.href);
  const search = url.searchParams.get('search');

  let filteredProducts = products;

  // If a search exists in the URL parameters,
  // filter the products that match the search.
  if (search) {
    filteredProducts = products.filter((product) => {
        let matchingKeyword = false;

        product.keywords.forEach((keyword) => {
          if (keyword.toLowerCase().includes(search.toLowerCase())) {
            matchingKeyword = true;
          }
        });
  
        return matchingKeyword ||
          product.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  filteredProducts.forEach((product) => {

    productsHTML += `
            <div class="product-container">
            <div class="product-image-container">
            <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
            ${product.name}
            </div>

            <div class="product-rating-container">
            <img class="product-rating-stars"
                src="${product.getStarsUrl()}">
            <div class="product-rating-count link-primary">
                ${product.rating.count}
            </div>
            </div>

            <div class="product-price">
               ${product.getPrice()}
            </div>

            <div class="product-quantity-container">
            <select class = "js-quantity-selector-${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            </div>
           ${product.extraDetails()}
            <div class="product-spacer"></div>

            <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
             data-product-id = "${product.id}">
            Add to Cart
            </button>
        </div>`
});

document.querySelector('.js-products-grid')
    .innerHTML = productsHTML;

function addedToCartMsg(productId,timerId){
    document.querySelector(`.js-added-to-cart-${productId}`).style.opacity = 1;
    if(timerId){
        clearTimeout(timerId);
    }
    const timer = setTimeout(()=>{
        document.querySelector(`.js-added-to-cart-${productId}`).style.opacity = 0;  
    },1500);
    return timer;
}
  
document.querySelectorAll('.js-add-to-cart')
    .forEach((button)=>{
        let timerId ;
        button.addEventListener('click',()=>{
            const{productId} = button.dataset;
            const itemQuantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
            ///////
            cart.addtoCart(productId,itemQuantity);
            ////////////
            updateCartQunatity();
            ///////
            timerId = addedToCartMsg(productId,timerId);
        });

}) ;

document.querySelector('.js-search-button')
.addEventListener('click', () => {
  const search = document.querySelector('.js-search-bar').value;
  window.location.href = `index.html?search=${search}`;
});
}


