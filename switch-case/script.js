let button;

function input() {
    let fisrstNumber = document.getElementById("firstNumber").value
    let secondNumber = document.getElementById("secondNumber").value
    let result
    
    switch (button) {
        case '+':
            result = fisrstNumber + secondNumber;
            break;
        case '-':
            result = fisrstNumber - secondNumber;
            break;
        case '*':
            result = fisrstNumber * secondNumber;
            break;
        case '/':
            result = fisrstNumber / secondNumber;
            break;
        case '^':
            result = Math.pow(fisrstNumber, secondNumber);
            break;
        case '%':
            result = (100 * fisrstNumber) / secondNumber
            break;
    }
    document.getElementById('result').innerHTML = result;
}

