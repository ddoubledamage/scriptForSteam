
let tdElements = document.querySelectorAll('td.wht_total');
let totalSum = 0;
tdElements.forEach(td => {
    let div = td.querySelector('div');
    if (div) {
        let amountText = div.innerText.trim();
        let amount = parseFloat(amountText.replace(' руб.', '').replace(/\s/g, ''));
        totalSum += amount;
    }
});

console.log(totalSum);
