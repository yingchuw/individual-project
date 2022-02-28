let carts = document.querySelectorAll('.shop-item-btn')
let products = [
    {
        name: "手工醉梅",
        tag:"ume", 
        inCart: 0
    },
    {
        name: "清酒梅酒",
        tag:"sakeume",
        inCart: 0 
    },
    {
        name: "威士忌梅酒",
        tag:"whiskyume",
        inCart: 0 
    },
    {
        name: "燒酌梅酒",
        tag:"shoume",
        inCart: 0 
    },
    {
        name: "泡盛梅酒",
        tag:"awamoriume",
        inCart: 0 
    }
];

for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', function(){
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers (){
    let productNumbers = localStorage.getItem('cartNumbers');

    if ( productNumbers ){
        document.querySelector('.header_icon span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if ( productNumbers ){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.header_icon span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.header_icon span').textContent = 1;
    }
    setItem(product);
}

function setItem (product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    // console.log(cartItems);

    if (cartItems != null){
        // console.log(cartItems[product.tag]);
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems, 
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost (product){
    // console.log("The product price", product.price);
    let cartCost = localStorage.getItem("totalCost");
    // console.log("My cart cost is", cartCost);
    // console.log(typeof cartCost);

    if (cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price)
    }else{
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    
    let listContent = document.querySelector(".products");
    console.log(cartItems);

    if (cartItems && listContent){
        listContent.innerHTML = '';
        Object.values(cartItems).map(item => {
            listContent.innerHTML += `
            <div class="productsInList">
            <div class="products">
                <ion-icon name="close-circle-outline"></ion-icon>
                <img src="./Product/Product pic/${item.tag}.png">
                <span>${item.name}</span>
            </div>
            <div class="quantity">
                <ion-icon name="caret-back-circle-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="caret-forward-circle-outline"></ion-icon>
            </div>
            <div class="total">
                ${item.inCart}pcs
            </div>
            </div>
            `;
        });

        listContent.innerHTML += `
            <div class="basketTotalContainer">
                <h3 class="basketTotalTitle">
                Total
                </h3>
                <h3 class="basketTotal">
                ${inCart}
                </h3>
            </div>
        `
        }


    }

onLoadCartNumbers();
displayCart();