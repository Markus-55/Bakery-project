// SELECT ELEMENTS
const productsElement = document.querySelector(".products")
const cartItemsEl = document.querySelector(".cart-items")

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

let cart = []

// Add to cart 
function addToCart(id){
    // Check if product already exist in cart
    if (cart.some((item) => item.id === id)){
        alert("already in cart")

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
    // renderTotal();
}

// render cart items 
function renderCartItems(){
    cartItemsEl.innerHTML = ""; // Clear cart element
    cart.forEach((item) => {
        cartItemsEl.innerHTML += `
     <div class="cart-row">
        <span class="cart-item">${item.name}</span>
        <div class="units">
        <div class="btn minus" onclick="changeQuantity('minus', ${item.id})">-</div>
        <div class="number">${item.numberOfUnits}</div>
        <div class="btn plus" onclick="changeQuantity('plus', ${item.id})">+</div>     
    </div>
        <span class="cart-item-price">${item.price}</span>
        <button class="remove-item">Ta bort</button>
     </div>`
    })
}


//Change quantity 
function changeQuantity(action, id) {
   cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits

    if (item.id === id) {
        if(action === "minus") {
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
