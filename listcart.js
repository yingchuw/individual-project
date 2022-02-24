if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready(){
    var remove_btn = document.getElementsByClassName("list-item-remove");
    // console.log(remove_btn);
    for(var i = 0; i < remove_btn.length; i++){
        var button = remove_btn[i]
        button.addEventListener("click", removeCartItem)
    }

    var qtyInput = document.getElementsByClassName('cart-qty-input')
    for(var i = 0; i < qtyInput.length; i++){
        var input = qtyInput[i]
        input.addEventListener('change', qtyChanged)
    }

    var addToCartBtn = document.getElementsByClassName('shop-item-btn')
    for (var i = 0; i < addToCartBtn.length; i++){
        var button = addToCartBtn[i]
        button.addEventListener('click', addToCartCliked)
    }
}


function removeCartItem(event){
    var buttonclicked = event.target
    buttonclicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function qtyChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}

function addToCartCliked(event){
    var button = event.target
    var item = button.parentElement.parentElement
    var title = item.getElementsByClassName('itemInnerText')[0].innerText
    var imgsrc = item.getElementsByClassName('itemInnerPic')[0].src

    console.log(title, imgsrc)
    addItemToCart(title, imgsrc)
}

function addItemToCart(title, imgsrc){
    var cartRow = document.createElement('div')
    cartRow.innerText = title
    var cartItem = document.getElementsByClassName('listCart')[0]
    cartItem.appendChild(cartRow)
}   

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName("listCart")[0]
    var listRows = cartItemContainer.getElementsByClassName("list-row")
    var total = 0
    for(var i = 0; i < listRows.length; i++){
        var listRow = listRows[i]
        var qtyElement = listRow.getElementsByClassName("cart-qty-input")[0]
        var qty = qtyElement.value
        total = total + qty

    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName("list-total-qty")[0].innerText = total
}