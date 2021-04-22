const HIDED = document.getElementById('hided');
let hided = [];

console.log('Javascript works');

document.getElementById("add-product").addEventListener("click", () => {
    console.log("The product add button is pressed");

    HIDED.style.display = 'block';
})



document.getElementById("confirmProduct").addEventListener("click", () => {
    HIDED.style.display = 'none';
    
    let PRODUCT = {product: product.value, amount: amount.value, price: price.value};

    product.value = "";
    amount.value = "";
    price.value = "";

    hided.push(PRODUCT);

    console.log(PRODUCT);

    console.log("Button Add your product is pressed!");

})
