// SELECT ELEMENTS
const productsElement = document.querySelector(".products")
const cartItemsEl = document.querySelector(".cart-items")
const cartTotalPriceEl = document.querySelector(".cart-total-price")
const totalItemsInCartEl = document.querySelector(".items-in-cart")

// RENDER PRODUCTS
function renderProducts(){
    products.forEach( (product) => {
        productsElement.innerHTML += `<div class="shop-item">
        <img class="shop-item-image"src=${product.imagesrc} alt=${product.name} width="250px" height="200px">

        <p class="shop-item-title">${product.name}</p>
        <p class="shop-item-price">${product.price}</p>
        <div class="shop-item-details">
            <p>${product.description}</p>
            <button class="shop-item-button" onclick="addToCart(${product.id})" type="button">LÄGG TILL</button>
            <input class="shop-item-quantity" type="number" value="1" />
        </div>
    </div>`
    })
}
renderProducts();

//cart array 

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// Add to cart 
function addToCart(id){
    // Check if product already exist in cart
    if (cart.some((item) => item.id === id)){
        changeQuantity("plus", id);

    } else {
        const item = products.find((product) => product.id === id);
        
        cart.push({
            ...item,
            numberOfUnits : 1,
        });
    }

    updateCart()

    }

//update cart
function updateCart(){
    renderCartItems();
    renderTotal();


// save cart to local storage
localStorage.setItem("CART", JSON.stringify(cart))
}

// Calculate and render total price
function renderTotal(){
    let cartTotalPrice = 0
    let cartTotalItems = 0

    cart.forEach((item) => {
        cartTotalPrice += item.price * item.numberOfUnits;
        cartTotalItems += item.numberOfUnits;
    })
    cartTotalPriceEl.innerHTML = `${cartTotalPrice} kr`;
    totalItemsInCartEl.innerHTML = cartTotalItems;

}

// render cart items 
function renderCartItems(){
    cartItemsEl.innerHTML = ""; // Clear cart element
    cart.forEach((item) => {
        cartItemsEl.innerHTML += `
     <div class="cart-row">
        <span class="cart-item">${item.name}</span>
        <div class="units">
        <div class="btn-minus" onclick="changeQuantity('minus', ${item.id})">-</div>
        <div class="number">${item.numberOfUnits}</div>
        <div class="btn-plus" onclick="changeQuantity('plus', ${item.id})">+</div>     
    </div>
        <span class="cart-item-price">${item.price}</span>
        <button class="remove-item" onclick="removeItem(${item.id})">Ta bort</button>
     </div>`
    })
}

// remove items from the cart
function removeItem(id){
   cart = cart.filter((item) => item.id !== id);

    updateCart()
}


//Change quantity 
function changeQuantity(action, id) {
   cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits

    if (item.id === id) {
        if(action === "minus" && numberOfUnits > 1) {
            numberOfUnits--;
        } else if (action === "plus") {
            numberOfUnits++
        }

    }
    return {
        ...item,
        numberOfUnits,

    };
 });    

 updateCart();
}
