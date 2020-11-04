



const billAmount = document.getElementById('billAmount') as HTMLInputElement;
const spanAmount = document.getElementById('amount') as HTMLSpanElement;
const tipEl = document.getElementById('tip') as HTMLSpanElement;
const amountToTip = document.getElementById('amountToTip') as HTMLSpanElement;
const totalToBePaid = document.getElementById('totalToBePaid') as HTMLSpanElement;
// const tipButton = document.querySelectorAll('button') as HTMLDivElement;

let amountOfBill = 0;
let tipPercentage = .2;

console.log({
    billAmount
});

billAmount.addEventListener('keydown', handleChange);
billAmount.addEventListener('keyup', updateUi);

document.querySelectorAll('#tip-buttons>button').forEach(button => {
    button.addEventListener('click', updateTip)
});

function updateTip() {
    const buttonTheyClick = this as HTMLButtonElement;
    tipPercentage = parseFloat(buttonTheyClick.dataset.amount);
    updateUi();
}

function handleChange(event: KeyboardEvent) {
    console.log({ 'Handle Change': this, event });
    if (event.key === 'e') {
        event.preventDefault();
    }
}

updateUi();
function updateUi(event?: KeyboardEvent) {
    amountOfBill = isNaN(billAmount.valueAsNumber) ? 0 : billAmount.valueAsNumber;
    spanAmount.innerText = amountOfBill.toString();
    tipEl.innerText = (tipPercentage * 100).toString();
    amountToTip.innerText = (amountOfBill * tipPercentage).toString();
    totalToBePaid.innerText = ((amountOfBill * tipPercentage) + amountOfBill).toString();
}