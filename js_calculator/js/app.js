// message in console
console.log("hello human slave")

// save result element
let answer = document.getElementById("answer");

function twoplustwo() {
    answer.innerHTML = 2 + 2;
}
function sevenminusfive() {
    answer.innerHTML = 7 - 5;
}

function multiply(n1, n2) {
    answer.innerHTML = n1 * n2;
}

function multiplyTwoNumbers() {
    let firstnumber = document.getElementById("firstnumber");
    let secondnumber = document.getElementById("secondnumber");
    let solve = firstnumber.value * secondnumber.value;
    answer.innerHTML = solve;
}