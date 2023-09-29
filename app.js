function appendToResult(value) {
    document.querySelector('.box-1').value += value;
}

function clearResult() {
    document.querySelector('.box-1').value = '';
}

function calculateResult() {
    try {
        document.querySelector('.box-1').value = eval(document.querySelector('.box-1').value);
    } catch (error) {
        document.querySelector('.box-1').value = 'Error';
    }
}

function deleteLastChar() {
    let currentValue = document.querySelector('.box-1').value;
    document.querySelector('.box-1').value = currentValue.slice(0, -1);
}
