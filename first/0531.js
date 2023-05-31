// n보다 커질 때까지 더하기
// numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 
// result = 139

const numbers = [34, 5, 71, 29, 100, 34];
const n = 123;

function solution(numbers, n) {
    var answer = 0;
    let sum = 0;
    for(let i = 0 ; i < numbers.length; i++) {
        sum += numbers[i];
        if(sum > n) {
            answer = sum;
            break;
        }
    }
    return answer;
    //console.log(answer);
}

solution(numbers, n);