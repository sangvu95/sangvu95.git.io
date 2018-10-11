//Bài 1:
function bai1(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        document.write(
            a + ", " + b + " là số" +"</br>");
        document.write (Math.max(a, b)+" là số lớn nhất");

    }
}
//testcase bai1(6,7)

//Bài 2:
function bai2(n) {var a = 1;
    if (n > 0) {
        for (i = n; i > 1; i--) { a = a * i }
        document.write(a+"</br>")
    }
}
//testcase bai2(3) 

//Bài 3:
function bai3(arr) {var newArr = [];
    for (i = 0; i < arr.length; i++) { if (arr[i] % 2 == 0) { newArr.push(arr[i]) } }
    return newArr.sort(function(a, b) { return b - a });
}
//testcase  bai3([21,14,2,5,10])

//Bài 4:

function bai4(a,b,c){var d;
    var user={username:a,password:b,confirm: c};if(a.length>=1&&a.length<=20&&b.length>=6&&b.length<=32&&c==b){d=document.write("OK")}return d}
//testcase bai4("id","matkhau","matkhau")
//testcase bai4("","matkhau","matkhau")