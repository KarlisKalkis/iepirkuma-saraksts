const HIDED = document.getElementById('hided');
let hided = [];

window.addEventListener('load', () => {
    hided = JSON.parse(localStorage.getItem("hided") || "[]");
    console.log(hided)
    render();
})


document.getElementById("add-product").addEventListener("click", () => {
    HIDED.style.display = 'block';
})



document.getElementById("confirmProduct").addEventListener("click", () => {
    HIDED.style.display = 'none';
    
    let PRODUCT = {product: product.value, amount: amount.value, };

    product.value = "";
    amount.value = "";

    hided.push(PRODUCT);

    render();
})

function render() {
    let saraksts = document.getElementById('saraksts');
    saraksts.innerHTML = "";

    for(let i = 0; 1 < hided.length; i++) {
        let PRODUCT = `
        <div class= "PRODUCT">
            <h3>Product: ${hided[i].product}</h3>
            <h4>Amount: ${hided[i].amount}</h4>
        </div>`

        saraksts.innerHTML += PRODUCT;
    }

    localStorage.setItem("saraksts", JSON.stringify(saraksts))
}
