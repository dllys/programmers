// 문자열 출력하기

const str1 = "HelloWorld!";
console.log(str1);


// a와 b 출력하기

const a = 4;
const b = 5;
console.log(`a = ${a} \nb = ${b}`);


// 문자열 반복해서 출력하기

const str2 = "string";
const n = 5;
console.log(str2.repeat(n));


// 대소문자 바꿔서 출력하기

const str3 = "aBcDeFg";
let sen = [];
    for (let i = 0; i < str3.length; i++){
        if(str3[i] === str3[i].toUpperCase()) {
            sen.push(str3[i].toLowerCase());
        } else {
            sen.push(str3[i].toUpperCase());
        }
    }
console.log(sen.join(''));


// 특수문자 출력하기

console.log('!@#$%^&*(\\\'"<>?:;'); // !@#$%^&*(\'"<>?:;