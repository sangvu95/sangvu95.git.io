//Bài 1:
function bai1(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        document.write(
            a + ", " + b + " là số");
        return Math.max(a, b);

    }
}

//Bài 2:
var a = 1

function bai2(n) {
    if (n > 0) {
        for (i = n; i > 1; i--) { a = a * i }
        document.write(a)
    }
}

//Bài 3:
var arr = []
var newArr = []

function bai3(arr) {
    for (i = 0; i < arr.length; i++) { if (arr[i] % 2 == 0) { newArr.push(arr[i]) } }
    return newArr.sort(function(a, b) { return b - a });
}