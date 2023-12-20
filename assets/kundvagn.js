if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  const removeCartItemsButton = document.querySelectorAll('.remove-item');
  for (let i = 0; i < removeCartItemsButton.length; i++) {
    let button = removeCartItemsButton[i];
    button.addEventListener('click', RemoveCartItem)
  }

}

const addToCartButton = document.querySelectorAll(".shop-item-button")
for (let i = 0; i < addToCartButton.length; i++) {
  let button = addToCartButton[i];
  button.addEventListener("click", addToCartClicked)
} 

const quantityInputs = document.querySelectorAll(".cart-quantity")
for (let i = 0; i < quantityInputs.length; i++) {
     let input = quantityInputs[i]
     input.addEventListener("change", quantityChanged)
}
function RemoveCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();

}

function addToCartClicked(event) {
  let button = event.target
  let shopItem = button.parentElement.parentElement;
  let title = shopItem.querySelector(".shop-item-title").innerText;
  let price = shopItem.querySelector(".shop-item-price").innerText;
  addItemToCart(title, price)
  updateCartTotal()
}

function addItemToCart(title, price){
  let cartRow = document.createElement("div")
  let cartItems = document.querySelector(".cart-items")
  let cartRowContents = `
        <div class="cart-row">
        <span class="cart-item-title">${title}</span>
          <input class="cart-quantity" type="number" value="1" />
          <span class="item-price">${price}</span>
          <button class="remove-item">Ta bort</button>
        </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.querySelector(".remove-item").addEventListener("click", RemoveCartItem)
  cartRow.querySelector(".cart-quantity").addEventListener("change", quantityChanged)
}

function updateCartTotal() {
  let cartRows = document.querySelectorAll('.cart-row');
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let quantityElement = cartRow.querySelector('.cart-quantity');
    let priceElement = cartRow.querySelector('.item-price');
    let price = parseFloat(priceElement.innerText.replace('kr', ' '));
    let quantity = quantityElement.value;
    console.log(price * quantity);
    total = total + (price * quantity)
  }
  document.querySelector('.cart-total-price').innerText = total + 'kr';
}
