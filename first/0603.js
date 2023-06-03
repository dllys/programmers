// 덧셈식 출력하기

const a = 4;
const b = 5;

console.log(`${a} + ${b} = ${a+b}`);

// 문자열 붙여서 출력하기

const str1 = "Hello";
const str2 = "World!";

console.log(str1+str2);

// 문자열 돌리기

const str = "abcde"

for(let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// 홀짝 구분하기

const n = 100;

if( n % 2 === 0 ) {
    console.log(`${n} is even`);
} else {
    console.log(`${n} is odd`);
}

// 문자열 겹쳐쓰기
// 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return
// my_string = "He11oWor1d" , overwrite_string = "lloWorl" , s = 2, result = "HelloWorld"

const my_string = "He11oWor1d";
const overwrite_string = "lloWorl";
const s = 2;

function solution(my_string, overwrite_string, s) {
    let answer = '';
    const myStr = [...my_string];
    myStr.splice(s, overwrite_string.length, overwrite_string);
    answer = myStr.join("");
    return answer;
    // console.log(answer);
}

solution(my_string, overwrite_string, s);