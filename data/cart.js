export let cart;

export function loadFromStorage(){
        cart = JSON.parse(localStorage.getItem('cart'))||
        [{
            productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId:'3'
        },
        {
            productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionId:'2'
        }
        ];
}
loadFromStorage();

function saveToStorage(cart){
    localStorage.setItem('cart',JSON.stringify(cart));
}
export function addtoCart(productId,itemQuantity){
    let matchingItem;
    cart.forEach(cartItem =>{
        if(productId === cartItem.productId){
            matchingItem = cartItem ; 
        }
    });


    if(matchingItem){
        matchingItem.quantity += itemQuantity;

    }else{
        cart.push({productId,quantity : itemQuantity,deliveryOptionId : '1' });
    }
    saveToStorage(cart);
    

}

export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem) =>{
        if (cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    saveToStorage(cart);
}

export function updateQuantity(productId,newQuantity){
    cart.forEach(cartItem =>{
        if(productId === cartItem.productId){
            cartItem.quantity = newQuantity;
        }
    });
    saveToStorage(cart);
}
export function updateDeliveryOption(productId,deliveryOptionsId){
    let matchingItem;
    cart.forEach(cartItem =>{
        if(productId === cartItem.productId){
            matchingItem = cartItem ;
        }
    });
    matchingItem.deliveryOptionId = deliveryOptionsId;
    saveToStorage(cart);
}

