// n의 배수
// num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return
// num = 98 / n = 2 / result = 1

function solution1(num, n) {
    let answer = 0;
    if(num % n == 0){
        answer = 1;
    } else {
        answer = 0;
    }
    return answer;
    // console.log(answer)
}

solution1(98, 2);


// 공배수
// number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return
// number = 60 / n = 2 / m = 3 / result = 1

function solution2(number, n, m) {
    let answer = 0;
    if (number % n == 0 && number % m == 0) {
        answer = 1;
    } else {
        answer = 0;
    }
    return answer;
    // console.log(answer)
}

solution2(60, 2, 3)


// 홀짝에 따라 다른 값 반환하기
// n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 
// n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return
// n = 7 / result = 16


function solutio3(n) {
    let answer = 0;
    if(n % 2 !== 0) {
        for(let i = 1; i <= n; i++) {
            if(i % 2 !== 0) {
                answer += i;
            }
        }
    } else {
        for(let i = 1; i <= n; i++) {
            if(i % 2 === 0) {
                answer += i*i;
            }
        }
    }
    
    return answer;
    // console.log(answer);
}

solutio3(7);


// 조건 문자열
// ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 
// 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return
// ineq = "<" / eq = "=" / n = 20 / m = 50 / resule = 1

function solution4(ineq, eq, n, m) {
    if (eq === '=' && n === m) return 1
    if (ineq === '<' && n < m) return 1
    if (ineq === '>' && n > m) return 1
    return 0
}

solution4("<", "=", 20, 50);


// flag에 따라 다른 값 반환하기
// flag가 true면 a + b를 false면 a - b를 return
// a = -4 / b = 7 / flag = true / result 3

function solution5(a, b, flag) {
    var answer = 0;
    if (flag == true) {
        answer = a + b;
    } else {
        answer = a - b;
    }
    return answer;
    // console.log(answer);
}

solution5(-4, 7, true);
