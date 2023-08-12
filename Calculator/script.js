const display=document.getElementById("input");
const buttons=document.querySelectorAll("#digit");
const operator=document.querySelectorAll(".operator");
const allclear=document.getElementById("allclear");
const del = document.getElementById("delete");
const result=document.getElementById("equal");

buttons.forEach(button => {
    button.addEventListener('click',() => {
        display.value+=button.textContent;
    });
});
operator.forEach(operator => {
    operator.addEventListener('click',() => {
        display.value+=operator.textContent;
    });
});
allclear.addEventListener('click',() => {
        display.value="";
});
del.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});

result.addEventListener('click', () => {
    const expression = display.value;
    let result = '';
    
    // Check for addition
    if (expression.includes('+')) {
        const values = expression.split('+');
        result = parseFloat(values[0]) + parseFloat(values[1]);
    }
    // Check for subtraction
    else if (expression.includes('-')) {
        const values = expression.split('-');
        result = parseFloat(values[0]) - parseFloat(values[1]);
    }
    // Check for multiplication
    else if (expression.includes('*')) {
        const values = expression.split('*');
        result = parseFloat(values[0]) * parseFloat(values[1]);
    }
    // Check for division
    else if (expression.includes('/')) {
        const values = expression.split('/');
        result = parseFloat(values[0]) / parseFloat(values[1]);
    }
    else if (expression.includes('%')) {
        const values = expression.split('%');
        result = parseFloat(values[0]) % parseFloat(values[1]);
    }
    
    display.value = result;
});

I





