//Bài 1

function bai1(num) {for (var a=1;i=num;i>1;i--){a=a*i} return a}
//testcase bai1(3)

//Bài 2
var newstr=''
function bai2(str){for (i=str.length-1;i>=0;i--){newstr+=str[i]}return newstr}
//testcase bai2('hello')

//Bài 3
var duplicatestr=''
function bai3(str){for(i=1;i<=10;i++){duplicatestr=duplicatestr+str+"-"}return duplicatestr}
//testcase bai3('123')

//Bài 4
var newArr=[]

function bai4(arr) {for(i=1;i<=arr.length;i++) 
    {var sa=arr.sort();newArr[i-1]=i+"."+sa[i-1]}
    document.write(newArr.join("</br>"))}
//testcase bai4(['Việt','Minh','Huy','Anh'])

//Bài 5
var newArr=[];
function bai5(arr){for(i=0;i<arr.length;i++){newArr[i]=arr[i]*2}return (newArr)}
//testcase bai5([3,6,4,8])

//Bài 6
var newArr=[]
function bai6(arr){for(i=0;i<arr.length;i++){newArr[i]=arr[i]%2}return newArr}
//testcase bai6([2,3,4,6,15])

