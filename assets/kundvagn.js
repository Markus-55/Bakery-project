if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  const removeCartItemsButton = document.querySelectorAll('.remove-item');
  console.log(removeCartItemsButton);
  for (let i = 0; i < removeCartItemsButton.length; i++) {
    let button = removeCartItemsButton[i];
    button.addEventListener('click', RemoveCartItem)
  }

}

const quantityInputs = document.querySelectorAll(".cart-quantity")
for (let i = 0; i < quantityInputs.length; i++) {
     let input = quantityInputs[i]
     input.addEventListener("change", quantityChanged)
}
function RemoveCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();

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
    total = total + price * quantity;
  }
  document.querySelector('.total-price').innerText = total + 'kr';
}
