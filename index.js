const buttons = document.getElementById("buttons-wrapper");
const resultField = document.getElementById("result");

let num1 = 0;
let num2 = 0;

buttons.addEventListener("click", parse);

function isNumber(value) {
    return !isNaN(value)
}

function parse(e) {
    const content = e.target.innerText;
    if (isNumber(+content) && resultField.innerText === '0') {
        resultField.innerText = content;
    } else if (isNumber(+content)) {
        resultField.innerText += content;
    } else if (!isNumber(+content)) {
        const operation = parseOperation(content);
        operation(resultField.innerText);
    }
}

function parseOperation(value) {
    if (value === "+") {
        return sum
    } else if (value === '-') {
        return () => {
        }
    } else if (value === '*') {
        return () => {
        }
    } else if (value === '/') {
        return () => {
        }
    } else if (value === 'CE') {
        return () => {
        }
    } else if (value === 'C') {
        return () => {
        }
    } else if (value === '<=') {
        return () => {
        }
    } else if (value === '=') {
        return () => {
        }
    }

}


function sum(value) {
    if (value.split('').includes('+')) {
        const arrValue = value.split('+');
        const sum = Number(arrValue[0]) + Number(arrValue[1]);
        resultField.innerText = `${sum.toString()}+`
    } else {
        resultField.innerText += '+'
    }
}

function result(value) {

}



