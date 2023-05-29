// 카운트 업
// start = 3 / end = 10 / result = [3, 4, 5, 6, 7, 8, 9, 10]	

function solution(start, end) {
    var answer = [];
    for (let i = start; i <= end; i++) {
        answer.push(i);
    }
    return answer;
    // console.log(answer);
}

solution(3,10);

