// "use strict";
// alert("hello world");

snake_case = true; //biến global ko cần khai báo biến, nên đặt kiểu snake_case

var camelCaseVariable;

camelCaseVariable = 'abc';

let camelCaseLet = "camel Case Let", 
    camelCase1 = "string", 
    camelCase2 = 'string';

let camelCase3 = "string"

// UPPERCASE
const CONSTVARIABLE = ' anc ';  // const giống final trong java
const myBirth = "03-06";  // const giống final trong java
// const dc địng dang là UPPERCASE khi giá trị của biến ko bao giờ thay đổi (hard-code)

const constVariable = age(myBirth)

function age(myBirth) {
    // return my age
    return myBirth + '-2023';
}

// alert(constVariable)
// alert(camelCaseLet);
// biến camelCaseLet vẫn =  "camel Case Let"

camelCaseLet = true; // biến camelCaseLet dc gán giá trị mới gán = true

camelCaseLet = camelCase3;

// alert(camelCaseLet);
// ko đặt tên biến với số ở đầu ví dụ let 1a = ''; hoặc tên biến có dấu " - " vídụ: let my-variable = '';

// alert('number' / 5);

// alert('500' / 5 < 0) ;

let plusString = camelCaseLet + ' ' + camelCase1 + ' end;';

// alert(plusString)

let stringVariable = `hello world  ${camelCaseLet}  ${camelCase1}`;

// alert(stringVariable);

/*
    if(true) {

    }   

    true: 
        1. string = "abc"; if (string) { => true }
        2. number = 1; if (number) { => true }
        3. boolean = true; if (boolean) { => true }
    false
        1. string = "" hoặc = '' hoặc = null hoặc = undefined hoặc = NaN; if (string) { => false }  == => true
        2. number = 0 hoặc = undefined; if (number) { => false }
        3. boolean = false; if (boolean) { => false }
*/

let a = 0;
let b = false;

// a != b  => false
// a !== b => true
// a == b => true  
// a === b => false


let nullVariable = null;


nullVariable = 423;

if (typeof nullVariable == 'string') { // false

}

nullVariable = 'String';


if (typeof nullVariable == 'string') { // true

}

function tenHam() {
    let a = 1;
    let b = 2
    alert(a + b);
}

tenHam();


















