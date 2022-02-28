let carts = document.querySelectorAll('.shop-item-btn')
let products = [
    {
        name: "Ume",
        tag:"ume", 
        inCart: 0
    },
    {
        name: "Sakeume",
        tag:"sakeume",
        inCart: 0 
    },
    {
        name: "Whiskyume",
        tag:"whiskyume",
        inCart: 0 
    },
    {
        name: "Shoume",
        tag:"shoume",
        inCart: 0 
    },
    {
        name: "Awamoriume",
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

function cartNumbers(product, action){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if( action == "decrease"){
        localStorage.setItem('cartNumbers', productNumbers - 1);
        document.querySelector('.header_icon span').textContent = productNumbers - 1;
    }else if( productNumbers ){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.header_icon span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.header_icon span').textContent = 1;
    }

    // if ( productNumbers ){
    //     localStorage.setItem('cartNumbers', productNumbers + 1);
    //     document.querySelector('.header_icon span').textContent = productNumbers + 1;
    // }else{
    //     localStorage.setItem('cartNumbers', 1)
    //     document.querySelector('.header_icon span').textContent = 1;
    // }
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
    // console.log(cartItems);

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
                <ion-icon class="decrease" name="caret-back-circle-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase" name="caret-forward-circle-outline"></ion-icon>
            </div>
            <div class="total">
                ${item.inCart}pcs
            </div>
            </div>
            `;
        });

        // listContent.innerHTML += `
        //     <div class="basketTotalContainer">
        //         <h3 class="basketTotalTitle">
        //         Total
        //         </h3>
        //         <h3 class="basketTotal">
        //         ${inCart}
        //         </h3>
        //     </div>
        // `;
        }

        deleteButton();
        manageQuantity();
    }

function deleteButton (){
    let deleteButton = document.querySelectorAll(".productsInList .products ion-icon");
    let productsName;
    let productsNumber = localStorage.getItem('cartNumbers');
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    // console.log(cartItems);

    for (let i = 0; i < deleteButton.length; i++){
        deleteButton[i].addEventListener("click", () => {
            productsName = deleteButton[i].parentElement.textContent.trim().toLowerCase();
            console.log(productsName);
            console.log(cartItems[productsName]);

            localStorage.setItem('cartNumbers', productsNumber - cartItems[productsName].inCart);
            delete cartItems[productsName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            
            displayCart();
            onLoadCartNumbers();

        });
    }
}

function manageQuantity(){
    let decreaseButton = document.querySelectorAll('.decrease');
    let increaseButton = document.querySelectorAll('.increase');
    let cartItems = localStorage.getItem('productsInCart');
    let currentQuantity = 0;
    let currentProduct = '';

    // console.log(cartItems);
    cartItems = JSON.parse(cartItems);
    // console.log(cartItems);

    for(let i = 0; i < decreaseButton.length; i++){
        decreaseButton[i].addEventListener('click', function(){
            currentQuantity = decreaseButton[i].parentElement.querySelector('span').textContent;
            currentProduct = decreaseButton[i].parentElement.previousElementSibling.querySelector('span').textContent.toLowerCase().trim();
            // console.log(currentProduct);
            if (cartItems[currentProduct].inCart > 1){
            cartItems[currentProduct].inCart -= 1;
            cartNumbers(cartItems[currentProduct], "decrease");
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        }
        })
    }

    for(let i = 0; i < increaseButton.length; i++){
        increaseButton[i].addEventListener('click', function(){
            currentQuantity = increaseButton[i].parentElement.querySelector('span').textContent;
            currentProduct = increaseButton[i].parentElement.previousElementSibling.querySelector('span').textContent.toLowerCase().trim();
            // console.log(currentProduct);
           
            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        })
    }
}

onLoadCartNumbers();
displayCart();