if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready() {
    var removeCartButtons = document.getElementsByClassName("cart-remove")
    console.log(removeCartButtons)
    for(var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    // quantity changes

    // var quantityInputs = document.getElementsByClassName('cart-quantity')
    // for(var i = 0; i < quantityInputs.length; i++) {
    //     var input = quantityInputs[i]
    //     input.addEventListener('change', quantityChanged)
    // }
    //  // add to cart
    //  var addCart = document.getElementsByClassName('cart')
    //  for (var i = 0; i < addCart.length; i++){
    //      var button = addCart[i]
    //      button.addEventListener('click', addCartClicked)
    //  }

}

// remove item from cart
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartContent()
}


// add to cart

// function addCartClicked(event){
//     var button = event.target
//     var shopProducts = button.parentElement
//     var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
//     var price = shopProducts.getElementsByClassName('price')[0].innerText;
//     var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
//     addProductToCart(title, price, productImg)
    
// }

function updateCartContent() {
    var cartItemContainer = document.getElementsByClassName("cart-content")[0]
    var cartRows =  cartItemContainer.getElementsByClassName("cart-row")
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName("price")
        var quantityElement = cartRow.getElementsByClassName("cart-quantity")[0]
        var totalElement = cartRow.getElementsByClassName("price-total")
        var price = priceElement.innerText
        var priceTotal = totalElement.innerText
        console.log(price, priceTotal, quantityElement)


    }
}




// quantity changes 
// function quantityChanged(event) {
//     var input = event.target
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1
//     }
//     updateTotal()
// }


// update cart
// function updateTotal() {
//     var cartContent = document.getElementById("subtotal")[0]
//     var total = 0
//     for(var i = 0; i < cartContent.length; i++)
//     var cartBox = cartContent[i]
//     var priceElement = cartBox.getElementsByClassName('cart-price')[0]
//     var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
//     var price = parseFloat(priceElement.innerText.replace("s", ""))
//     var quantity = quantityElement.value
//     total = total + (price * quantity)

//     document.getElementsByClassName("total-price")[0].innerText = "$" + total;
// }


