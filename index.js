const buttons = document.getElementById("buttons-wrapper");
const resultField = document.getElementById("result");
const mathSymbols = new RegExp('[/*=+-]');
const operation = new RegExp('(CE|C|<)');
const numbers = new RegExp("[0-9]");

let hasMathSymbols = false;

buttons.addEventListener("click", parse);

function parse(e) {
    const content = e.target.innerText;

    if (resultField.innerText === '0' || content === "-" && resultField.innerText === '0') {
        if (content !== "=") {
            resultField.innerText = content;
        }
    } else if (content.match(numbers)) {
        resultField.innerText += content;
    } else if (content.match(mathSymbols) && !hasMathSymbols && content !== "=") {
        resultField.innerText += content;
        if (!resultField.innerHTML[0].match(mathSymbols) && resultField.innerText[resultField.innerText.length - 1].match(mathSymbols)) {
            hasMathSymbols = true;
        }
    } else if (content.match(mathSymbols) && hasMathSymbols && content !== "=") {
        resultField.innerText = resultInProceed(content) + content;
    } else if (content.match(mathSymbols) && hasMathSymbols && content === "=") {
        resultField.innerText = result();
        hasMathSymbols = false;
    }
}

function resultInProceed(symbol) {
    const separateSentence = resultField.innerText.split(symbol);
    const result = eval(`${separateSentence[0]} ${symbol} ${separateSentence[1]}`);
    return result.toString();
}

function result() {
    const operation = resultField.innerText.match(mathSymbols)[0];
    const separateSentence = resultField.innerText.split(operation);
    const result = eval(`${separateSentence[0]} ${operation} ${separateSentence[1]}`);
    return result.toString();
}



