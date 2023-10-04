var input = document.querySelectorAll('.btn');
var screen = document.querySelector('.display');

for (item of input) {
    item.addEventListener('click', (e)=> {
        
        inputtext = e.target.innerText;
        
        if (inputtext == 'x') {
            inputtext='*';
        }
        if (inputtext == '÷') {
            inputtext='/';
        }
        
        screen.value+= inputtext;
    });
}


function Ac() {
    screen.value = "";
}

function Delete() {
    screen.value = screen.value.slice(0, screen.value.length-1);
}


// Square function
function pow() {
    screen.value=Math.pow(screen.value,2);
}

function sqrt() {
    screen.value=Math.sqrt(screen.value);
}

//sin function
function sin() {
    var val = Math.sin(screen.value);
    screen.value=val;
}

function cos() {
    screen.value=Math.cos(screen.value);
}

function Fact() {
    let x = screen.value;
    var fact = 1;
    for(let i=1; i<=x; i++) {
        var fact = fact*i;
    };
    screen.value = fact;
}

function Log() {
    screen.value=Math.log(screen.value);
}

function Plusminus() {
    let num = screen.value;
    screen.value = num * -1;
}