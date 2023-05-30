// 원소들의 곱과 합
// 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return

let num_list = [3, 4, 5, 2, 1];

function solution(num_list) {
    var answer = 0;
    let sum = 0;
    let double = 1;
    let square = 0;
    for(let i = 0; i < num_list.length; i++) {
        double *= num_list[i];
        sum += num_list[i];
    }
    
    square = sum * sum;
    
    if(double < square) {
        answer = 1;
    } else {
        answer = 0;
    }
    return answer;
    // console.log(answer);
}

solution(num_list);
