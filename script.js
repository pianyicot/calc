let result = '0';
let numberOne = 0;
let numberTwo = 0;
let check = 'nothing'
// check - переменная для того, чтобы понять, складываем мы или уничтожаем, 
// делим или умножаем
// check = nothing - ничего не делать
// check = *
// check = +
// check = /
// check = -

function c() {
    result = '0';
    document.getElementById('total').innerHTML = result;
}

function del() {
    // if - если, else - иначе
    if (result.length > 1) {
        result = result.slice(0, -1); // удаление элемента с конца
        document.getElementById('total').innerHTML = result;
    }
    else {
        result = '0';
        document.getElementById('total').innerHTML = result;
    }
}

function plus() {
    // parseFloat - метод JS для перевода строки в число (integer)
    numberOne = parseFloat(result);
    result = '0';
    check = '+';
    document.getElementById('total').innerHTML = result;
}

function minus() {
    // parseFloat - метод JS для перевода строки в число (integer)
    numberOne = parseFloat(result);
    result = '0';
    check = '-';
    document.getElementById('total').innerHTML = result;
}

function miltuply() {
    // parseFloat - метод JS для перевода строки в ЦЕЛОЕ число (integer)
    // parseFloat - перевод в число с плавающей точкой
    numberOne = parseFloat(result);
    result = '0';
    check = '*';
    document.getElementById('total').innerHTML = result;
}

function divide() {
    // parseFloat - метод JS для перевода строки в число (integer)
    numberOne = parseFloat(result);
    result = '0';
    check = '/';
    document.getElementById('total').innerHTML = result;
}

function pi() {
    result = '3.1415926535';
    document.getElementById('total').innerHTML = result;
}

function degree() {
    numberOne = parseFloat(result);
    result = '0';
    check = '^';
    document.getElementById('total').innerHTML = result;
}

function percent() {
    // parseFloat - метод JS для перевода строки в число (integer)
    numberOne = parseFloat(result);
    result = '0';
    check = '%';
    document.getElementById('total').innerHTML = result;    
}

function equality() {
    if (numberOne != 0 && check == "+") {
        numberTwo = parseFloat(result);
        result = numberOne + numberTwo;
        document.getElementById('total').innerHTML = result;
        check = 'noting';
    }

    if (numberOne != 0 && check == "*") {
        numberTwo = parseFloat(result);
        result = numberOne * numberTwo;
        document.getElementById('total').innerHTML = result;
        check = 'noting';
    }

    if (numberOne != 0 && check == "-") {
        numberTwo = parseFloat(result);
        result = numberOne - numberTwo;
        document.getElementById('total').innerHTML = result;
        check = 'noting';
    }    

    if (numberOne != 0 && check == "/") {
        numberTwo = parseFloat(result);
        result = numberOne / numberTwo;
        document.getElementById('total').innerHTML = result;
        check = 'noting';
    }    

    if (numberOne != 0 && check == "^") {
        numberTwo = parseFloat(result);
        result = numberOne ** numberTwo;
        document.getElementById('total').innerHTML = result;
        check = 'noting';
    }    
    if (numberOne != 0 && check == "%") {
        numberTwo = parseFloat(result);
        result = numberOne / (numberTwo/100);
        console.log(result);
        document.getElementById('total').innerHTML = result + '%';
        check = 'noting';
    }
}

function zero() {
    if (result.charAt(0) == '0') {
    }
    else {
        result = result + '0';
        document.getElementById('total').innerHTML = result;
    }
}
function one() {
    if (result.charAt(0) == '0') {
        result = '';
        result = result + '1';
        document.getElementById('total').innerHTML = result;
    }
    else {
        result = result + '1';
        document.getElementById('total').innerHTML = result;

    }
}
function two() {
    if (result.charAt(0) == '0') {
        result = '';
        result = result + '2';
        document.getElementById('total').innerHTML = result;
    }
    else {
        result = result + '2';
        document.getElementById('total').innerHTML = result;

    }
}
function three() {
    if (result.charAt(0) == '0') {
        result = '';
        result = result + '3';
        document.getElementById('total').innerHTML = result;
    }
    else {
        result = result + '3';
        document.getElementById('total').innerHTML = result;

    } 
}
function four() {
    if (result.charAt(0) == '0') {
        result = '';
        result = result + '4';
        document.getElementById('total').innerHTML = result;
    }
    else {
        result = result + '4';
        document.getElementById('total').innerHTML = result;

    } 
}
function five() {
    if (result.charAt(0) == '0') {
        result = '';
        result = result + '5';
        document.getElementById('total').innerHTML = result;
    }
    else {
        result = result + '5';
        document.getElementById('total').innerHTML = result;

    } 
}
function six() {
    if (result.charAt(0) == '0') {
        result = '';
        result = result + '6';
        document.getElementById('total').innerHTML = result;
    }
    else {
        result = result + '6';
        document.getElementById('total').innerHTML = result;

    } 
}
function seven() {
    if (result.charAt(0) == '0') {
        result = '';
        result = result + '7';
        document.getElementById('total').innerHTML = result;
    }
    else {
        result = result + '7';
        document.getElementById('total').innerHTML = result;

    } 
}
function eight() {
    if (result.charAt(0) == '0') {
        result = '';
        result = result + '8';
        document.getElementById('total').innerHTML = result;
    }
    else {
        result = result + '8';
        document.getElementById('total').innerHTML = result;

    } 
}
function nine() {
    if (result.charAt(0) == '0') {
        result = '';
        result = result + '9';
        document.getElementById('total').innerHTML = result;
    }
    else {
        result = result + '9';
        document.getElementById('total').innerHTML = result;

    } 
}