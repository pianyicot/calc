let result = '0';

function c() {
    result = '0';
    document.getElementById('total').innerHTML = result;
}

function del() {
    // if - если, else - иначе
    if (result.length > 1) {
        console.log(result.length);
        result = result.slice(0, -1); // удаление элемента с конца
        document.getElementById('total').innerHTML = result;
    }
    else {
        result = '0';
        document.getElementById('total').innerHTML = result;
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

