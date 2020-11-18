var a, b;
let sum = 0;

a = prompt("Введите начало диапазона");
b = prompt("Введите конец диапазона");

if (a <= b) {
    for (let a = 0; a <= b; a++) {
        sum = sum + a;
    }
    alert(sum);
}
else {
    alert("Веддите второе число которое больше первого!")
}
