// 문자열 섞기
// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return
// str1 = "aaaaa" / str2 = "bbbbb" / result = "ababababab"

const str1 = "aaaaa";
const str2 = "bbbbb";

function solution(str1, str2) {
    let answer = '';
    
    for (let i = 0; i < str1.length; i++) {
        answer += str1[i];
        answer += str2[i];
    }
    
    return answer;
    // console.log(answer);
}

solution(str1, str2);


// 문자 리스트를 문자열로 변환하기
// arr의 원소들을 순서대로 이어 붙인 문자열을 return
// arr = ["a","b","c"] / result = "abc"

const arr = ["a","b","c"];

function solution1(arr) {
    let answer = '';
    
    for(let i = 0; i < arr.length; i++) {
        answer += arr[i];  
    }
    return answer;
    // console.log(answer)
}

solution1(arr);


// 문자열 곱하기
// my_string을 k번 반복한 문자열을 return
// my_string = "love" / k = 3 / result = "lovelovelove"

const my_string = "love";
const k = 3;

function solution2(my_string, k) {
    let answer = '';
    // for(var i = 0; i < k; i++) {
    //     answer += my_string;
    // }
    answer = my_string.repeat(k)
    return answer;
    // console.log(answer);
}

solution2(my_string, k)


// 더 크게 합치기
// ex) 12 ⊕ 3 = 123
// a ⊕ b와 b ⊕ a 중 더 큰 값을 return (같다면 a ⊕ b를 return)
// a = 9 / b = 91 / result = 991

const a = 9;
const b = 91;

function solution3(a, b) {
    var answer = 0;
    let str1 = Number(a.toString() + b.toString())
    let str2 = Number(b.toString() + a.toString())
    
    if ( str1 >= str2 ) {
        answer = str1;
    } else {
        answer = str2;
    }
    return answer; 
    // console.log(answer);
}

solution3(a, b);


// 두 수의 연산값 비교하기
// ex) 12 ⊕ 3 = 123
// a ⊕ b와 2 * a * b 중 더 큰 값을 return (같으면 a ⊕ b를 return)
// c = 2 / d = 91 / result = 364

const c = 2;
const d = 91;

function solution4(c, d) {
    var answer = 0;
    
    let num1 = Number(c.toString() + d.toString());
    let num2 = 2 * c * d;
    
    num1 >= num2 ? answer = num1 : answer = num2;
    
    return answer;
    // console.log(answer);
}

solution4(c, d);
