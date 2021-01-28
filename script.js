const result = document.querySelector('.result');

const onlyNum = [];

const things = [];

function putInArray(ingredient) {
    things.push(ingredient);
}

function getSum(total,num) {
    return total+num;
}

function numberIsPressed(number) {
    onlyNum.push(number);
    result.innerText = onlyNum.reduce(getSum);
}

function calIsPressed() {
    onlyNum.splice(0);
}

function calculator() {
    if(things[things.length-1] === "+" || things[things.length-1] === "-") {
        return eval(things.reduce(getSum)+"0");
    } else if(things[things.length-1] === "*" || things[things.length-1] === "/") {
        return eval(things.reduce(getSum)+"1");
    } else {
        return eval(things.reduce(getSum));
    }
}

function showResult() {
    result.innerText = calculator();
}

function reset() {
    result.innerText = 0;
    things.splice(0);
    onlyNum.splice(0);
}

