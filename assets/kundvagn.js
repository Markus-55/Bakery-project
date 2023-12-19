const removeCartItemsButton = document.querySelectorAll(".remove-item")
console.log(removeCartItemsButton);
for (let i = 0; i < removeCartItemsButton.length; i++) {
    let button = removeCartItemsButton[i]
    button.addEventListener("click", function(event){
        let buttonClicked = event.target;
        buttonClicked.parentElement.remove()
        updateCartTotal()
    })

}
    

function updateCartTotal() {
    let cartRows = document.querySelectorAll(".cart-row")
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let quantityElement = cartRow.querySelector(".cart-quantity")
        let priceElement = cartRow.querySelector(".item-price")
        let price = parseFloat(priceElement.innerText.replace("kr", " "))
        let quantity = quantityElement.value
        console.log(price * quantity);
        total = total + (price * quantity)
     }
     document.querySelector(".total-price").innerText = total + "kr"
    
}