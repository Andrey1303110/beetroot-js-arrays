var i;
var num = prompt('Введите число', " ");
var arr = [];
if (num > 0) {
    for (let i = 1; i <= num; i++) {

        if (num % i == 0) {
            arr.push(i);
        }
    }
}
if (num < 0) {
    for (let i = -1; i >= num; i--) {

        if (num % i == 0) {
            arr.push(i);
        }
    }
}
alert(arr);
console.log(arr);