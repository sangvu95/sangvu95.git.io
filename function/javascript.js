//Bài 1
var x
function bai1(x){return x*x}
//test case 
//console.log(bai1(1))
//console.log(bai1(3))

//Bài 2
var a
var b
var c
function bai2(a,b,c){return (3*a+2*b-c)}
var x=bai2(a,b,c)
//testcase
//console.log(bai1(bai2(1,2,3)))
//console.log(bai1(bai2(2,3,4)))

//Bài 3
var str3
function bai3(str3){return str3.slice(0,10) + "..."}
//testcase
//console.log(bai3("Tham số truyền vào là một chuỗi dài hơn 30 kí tự"))
////console.log(bai3("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))

//Bài 4
var str4
function bai4(str4){return str4.charAt(0).toUpperCase()+str4.slice(1).toLowerCase()}
//testcase
//console.log(bai4("welcome to Techmaster"))
//console.log(bai4("hello World"))


//Bài 5
var number
function bai5(number){return Math.min(...number)}
//testcase
//console.log(bai5([121321,21321,413,2,323]))
//console.log(bai5([34325,324,234,52,332]))

//Bài6
var name
function bai6(name){return name.sort()}
//testcase
//console.log(bai6(["Huy","Minh","Thắng","Việt","Linh"]))
//console.log(bai6(["Bình","An","Long","Cường","Sơn"]))

//Bài 7
var teacher = {
    firstname: 'Kim',
    lastname: 'Dung',
    age: 40,
    say: function aboutme() {document.write('Xin chào, tôi là ' +this.firstname+' '+this.lastname+'. Năm nay tôi '+this.age+' tuổi.')
    }
}
var student = {
    firstname: 'Đức',
    lastname: 'Minh',
    age: 20,
    say: function aboutme() {document.write('Xin chào, tôi là ' +this.firstname+' '+this.lastname+'. Năm nay tôi '+this.age+' tuổi.')
    }
}
var parent = {
    firstname: 'Tiến',
    lastname: 'Đạt',
    age: 60,
    say: function aboutme() {document.write('Xin chào, tôi là ' +this.firstname+' '+this.lastname+'. Năm nay tôi '+this.age+' tuổi.')
    }
}
//testcase
//teacher.say()
//student.say()
//parent.say()