const HIDED = document.getElementById('hided');

console.log('Javascript works');

document.getElementById("add-product").addEventListener("click", () => {
    console.log("The product add button is pressed");

    HIDED.style.display = 'block'
})



document.getElementById("confirmProduct").addEventListener("click", () => {
    HIDED.style.display = 'none'
    

    console.log("Button Add your product is pressed!");

})
