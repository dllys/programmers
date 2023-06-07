// 코드 처리하기
// code = "abc1abc1abc" / result = "acbac"

function solution1(code) {
    let answer = '';
    let mode = 0;

    for (let i = 0; i < code.length; i += 1) {
        if (Number(code[i]) === 1) {
        mode = mode === 1 ? 0 : 1;
        }
        if (Number(code[i]) !== 1 && i % 2 === mode) {
        answer += code[i];
        }
    }
    return answer.length > 0 ? answer : 'EMPTY';
}

solution1("abc1abc1abc");


// 등차수열의 특정한 항만 더하기
// 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때, 
// 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return
// a = 3 / d = 4 / included = [true, false, false, true, true] / result = 37

function solution2(a, d, included) {
    let answer = 0;
    let arr = [a]
    for(let i = 1 ; i < included.length; i ++) {
        arr[i] = arr[i-1] + d;
    }
    answer = arr.reduce((acc, cur, idx) => included[idx] ? acc+cur : acc , 0)
    return answer;
}

solution2(3, 4, [true, false, false, true, true]);


// 주사위 게임 2
// a = 2 / b = 6 / c = 1 / result = 9 

function solution3(a, b, c) {
    let answer = 0;
    if (a === b && b === c && a === c) {
        answer = (a + b + c) * (a**2 + b**2 + c**2 ) * (a**3 + b**3 + c**3);
    } else if (a === b || b === c || a=== c) {
        answer = (a + b + c) * (a**2 + b**2 + c**2);  
    } else {
        answer = a+b+c;
    }
    
    return answer;
}

solution3(2, 6, 1);


// 원소들의 곱과 합
// 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return
// num_list = [3, 4, 5, 2, 1] / result = 1

function solution4(num_list) {
    let answer = 0;
    let sum = 0;
    let double = 1;
    let square = 0;
    for(let i = 0; i < num_list.length; i++) {
        double = double * num_list[i];
        sum += num_list[i];
    }
    console.log(double);
    
    square = sum * sum;
    
    if(double < square) {
        answer = 1;
    } else {
        answer = 0;
    }
    return answer;
}

solution4([3, 4, 5, 2, 1]);


// 이어 붙인 수
// num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return
// num_list = [3, 4, 5, 2, 1] / result = 393

function solution5(num_list) {
    let answer = 0;
    let odd = [];
    let even = [];
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            even.push(num_list[i]);
        } else {
            odd.push(num_list[i]);
        }
    }
    answer = Number(even.join("")) + Number(odd.join(""));
    return answer;
}

solution5([3, 4, 5, 2, 1]);