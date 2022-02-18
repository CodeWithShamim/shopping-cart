// creat a function
function updateCaseNumber(product, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {

        productNumber = parseInt(productNumber) + 1;
    } else {
        if (productNumber > 0) {
            productNumber = parseInt(productNumber) - 1;
        }
    }
    productInput.value = productNumber

    // price update 
    if (product == 'case') {
        const productPrice = document.getElementById(product + '-price');
        productPrice.innerText = productNumber * 59;
    } else {
        const productPrice = document.getElementById(product + '-price');
        productPrice.innerText = productNumber * 1219;
    }

    // calculate subtotal, tax and grandTotal

    const phonePrice = document.getElementById('phone-price');
    const casePrice = document.getElementById('case-price');
    console.log(phonePrice.innerText)

    // subtotal
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = parseInt(phonePrice.innerText) + parseInt(casePrice.innerText);
    // tax
    const tax = document.getElementById('tax');
    const totalTaxPrice = parseInt(subTotal.innerText) * .2
    tax.innerText = totalTaxPrice.toFixed(2);
    // grandTotal
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = parseFloat(subTotal.innerText) + parseFloat(tax.innerText);
}

// handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function() {
    updateCaseNumber('phone', true);
})

document.getElementById('phone-minus').addEventListener('click', function() {
    updateCaseNumber('phone');
})


// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function() {
    updateCaseNumber('case', true);
})

document.getElementById('case-minus').addEventListener('click', function() {
    updateCaseNumber('case');
})