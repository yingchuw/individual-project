if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}


// list cart btn
var theCart = document.getElementById('theCart')
var listBtn = document.getElementById('listBtn')
var listClose = document.getElementsByClassName('listClose')[0]
// console.log(theCart, listBtn, listClose)

listBtn.onclick = function (){
    theCart.style.display = 'block';
}

listClose.onclick = function () {
    theCart.style.display = 'none';
  };


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

    document.getElementsByClassName('send-Btn')[0].addEventListener('click', purchaseClicked)

}

function purchaseClicked(){
    alert('感謝您的詢問, 客服人員將盡快與您聯繫')
    var cartItems = document.getElementsByClassName('list-row')[0]
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
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
    var item = button.parentElement.parentElement.parentElement
    var title = item.getElementsByClassName('itemTitle')[0].innerText
    var img = item.getElementsByClassName('itemImg')[0].src
    addItemToCart(title, img)
    updateCartTotal()
}

function addItemToCart(title, img){
    var cartRow = document.createElement('div')
    cartRow.classList.add('list-row')
    // cartRow.innerText = title
    var cartItems = document.getElementsByClassName('listCart')[0]
    var cartItemNames = document.getElementsByClassName('list-item-name')
    for (var i = 0; i < cartItemNames.length; i++){
        if (cartItemNames[i].innerText == title){
            alert('已加入清單')
            return
        }
    }
    var cartRowContents = `
    <div class="cart-Item">
        <img
        src="${img}"
        id="item-img"
        alt=""
        />
    </div>
    <div class="list-text">
        <p id="list-item-name" class="list-item-name">${title}</p>
    </div>
    <div class="list-qty">
        <input class="cart-qty-input" type="number" value="1" />
        <button class="list-item-remove">移除</button>
    </div>
    `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('list-item-remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-qty-input')[0].addEventListener('change', qtyChanged)
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

