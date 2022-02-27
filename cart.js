let carts = document.querySelectorAll('.shop-item-btn')
let products = [
    {
        name: "手工醉梅",
        inCart: 0
    },
    {
        name: "清酒梅酒",
        inCart: 0 
    },
    {
        name: "威士忌梅酒",
        inCart: 0 
    },
    {
        name: "燒酌梅酒",
        inCart: 0 
    },
    {
        name: "泡盛梅酒",
        inCart: 0 
    }
];


for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', function(){
        cartNumbers();
    })
}

function onLoadCartNumbers (){
    let productNumbers = localStorage.getItem('cartNumbers');

    if ( productNumbers ){
        document.querySelector('.header_icon span').textContent = productNumbers;
    }
}

function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if ( productNumbers ){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.header_icon span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.header_icon span').textContent = 1;
    }
    
}

onLoadCartNumbers();