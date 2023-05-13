window.onload = function () {
    const calculateBtnElement = document.getElementById("calculateBtn");
    calculateBtnElement.onclick = calculate;
}

function calculate() {
    const num1Element = document.getElementById("number1");
    const num2Element = document.getElementById("number2");
    const operatorElement = document.getElementById("operator");
    if (isFormValid(num1Element, num2Element, operatorElement)) {
        const num1 = num1Element.value;
        const num2 = num2Element.value;
        const operator = operatorElement.value;
        let result = '';
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;

            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
        }
        document.getElementById("result").innerHTML = `<p>Result: ${result}</p>`;
    }
    }
    function isFormValid(num1Element, num2Element, operatorElement) {
        let isValid = true;
        if (!num1Element.value) {
            document.getElementById("num1ErrMsg").innerHTML = 'Please enter number 1';
            isValid = false;
        }
        if (!num2Element.value) {
            document.getElementById("num2ErrMsg").innerHTML = 'Please enter number 2';
            isValid = false;
        }
        if (!operatorElement.value) {
            document.getElementById("operatorErrMsg").innerHTML = 'Please choose operator';
            isValid = false;
        }
        return isValid;

    }
