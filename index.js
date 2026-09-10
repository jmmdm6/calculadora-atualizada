// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

// Apaga só o último caractere digitado, em vez de limpar tudo.
// slice(0, -1) corta a última posição da string; se o display já
// estiver vazio, continua vazio (não dá erro).
function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}
