//Bài 1:
var now = new Date()
document.write(now+"</br>")
var month = now.getMonth()
if (month >= 0 && month <= 2) { document.write("Xuân") } 
else if (month >= 3 && month <= 5) { document.write("Hạ") } 
else if (month >= 6 && month <= 8) { document.write("Thu") }
 else if (month >= 9 && month <= 11) { document.write("Đông") }

//Bài 2:
function bai2(x) {
    if (typeof x == "string");
    else if (typeof x == "number") { x = x.toString() };
    document.write(x.slice(0, 10) + "...")
}

//Bài 3:
function bai3(x) {
    var Điểm;
    if (x >= 0 && x <= 3.9) { Điểm = "F" } 
    else if (x >= 4 && x <= 5.4) { Điểm = "D" } 
    else if (x >= 5.5 && x <= 6.9) { Điểm = "C" } 
    else if (x >= 7 && x <= 8.4) { Điểm = "B" }
     else if (x >= 8.5 && x <= 10) { Điểm = "A" }
    return Điểm;
}

//Bài 4:
function bai4(y) {
    var str
    switch (y) {
        case "AD":
            document.write(str = "Xin chào");
            break;
        case "AE":
            document.write(str = "Xin chào");
            break;
        case "AF":
            document.write(str = "Xin chào");
            break;
        case "AG":
            document.write(str = "Xin chào");
            break;
        case "VN":
            document.write(str = "Xin chào");
            break;

    }
    return str;
}

//Bài 5
function bai5(arr){document.write(arr.indexOf(true))}

//Bài 6
function bai6(){
    for(i=1;i<=100;i++)
    {if(i%2==0){document.write('<li style="color:blue;">'+i+'</li>')}
    else if(i%2==1){document.write('<li style="color:red;">'+i+'</li>')}
    };return li;}