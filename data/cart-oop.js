function Cart(localStorageKey){
    const cart = {

        cartItems : undefined,
        
        loadFromStorage(){
           this.cartItems = JSON.parse(localStorage.getItem(localStorageKey))||
           [{
               productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
               quantity: 2,
               deliveryOptionId:'3'
           },
           {
               productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
               quantity: 1,
               deliveryOptionId:'2'
           }];
       },
       saveToStorage(){
           localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems));
       },
       addtoCart(productId,itemQuantity){
           let matchingItem;
           this.cartItems.forEach(cartItem =>{
               if(productId === cartItem.productId){
                   matchingItem = cartItem ; 
               }
           });
       
       
           if(matchingItem){
               matchingItem.quantity += itemQuantity;
       
           }else{
               this.cartItems.push({productId,quantity : itemQuantity,deliveryOptionId : '1' });
           }
           this.saveToStorage();
           
       
       },
       removeFromCart(productId){
           const newCart = [];
           this.cartItems.forEach((cartItem) =>{
               if (cartItem.productId !== productId){
                   newCart.push(cartItem);
               }
           });
       
           this.cartItems = newCart;
           this.saveToStorage();
       },
       updateQuantity(productId,newQuantity){
           this.cartItems.forEach(cartItem =>{
               if(productId === cartItem.productId){
                   cartItem.quantity = newQuantity;
               }
           });
           this.saveToStorage(cart);
       },
       updateDeliveryOption(productId,deliveryOptionsId){
           let matchingItem;
           this.cartItems.forEach(cartItem =>{
               if(productId === cartItem.productId){
                   matchingItem = cartItem ;
               }
           });
           matchingItem.deliveryOptionId = deliveryOptionsId;
           this.saveToStorage();
       }
   
   
   };
   return cart;
}
const cart = Cart('cart-oop');

cart.loadFromStorage();



