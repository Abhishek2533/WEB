let inputs = document.querySelectorAll('.btn');
var screen = document.querySelector('.display');

for (item of inputs ) {
    item.addEventListener('click', (e)=> {
        
        let inputtext = e.target.innerText;
        
        if (inputtext == 'x') {
            inputtext='*';
        }
        if (inputtext == '÷') {
            inputtext='/';
        }
        
        screen.value+= inputtext;
    });

}


//all clear function
function Ac() {
    screen.value = "";
}


//delete function
function Delete() {
    if (screen.value == 'ERROR'){
        screen.value = '';
    }
    else {
        screen.value = screen.value.slice(0, screen.value.length-1);
    }
}


// Square function
function pow() {
    screen.value=Math.pow(screen.value,2);
}


//square root function
function sqrt() {
    screen.value=Math.sqrt(screen.value);
}


//sin function
function sin() {
    var val = Math.sin(screen.value);
    screen.value=val;
}


//cos function
function cos() {
    screen.value=Math.cos(screen.value);
}


//factorial function
function Fact() {
    let x = screen.value;
    var fact = 1;
    for(let i=1; i<=x; i++) {
        var fact = fact*i;
    };
    screen.value = fact;
}


//logarithmic function
function Log() {
    screen.value=Math.log(screen.value);
}


//sign conversion
function Plusminus() {
    let num = screen.value;
    screen.value = num * -1;
}


//pi function
function Pi() {
    // val = Math.PI;
    screen.value = Math.PI;
}



function hasOnlyNumbersAndOperators(str) {
    let allValues = /^[0-9+\-*/.()+$]/;
    return allValues.test(str);
}


//evaluate function
function Evaluate() {
    if (hasOnlyNumbersAndOperators(screen.value)) {
        screen.value = eval(screen.value);
    } else {
        screen.value = 'ERROR';
    }
}