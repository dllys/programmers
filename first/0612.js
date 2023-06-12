// 마지막 두 원소
// 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 
// 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return
// num_list = [2, 1, 6] / result = [2, 1, 6, 5]

function solution(num_list) {
    let len = num_list.length;
    if(num_list[len-1] > num_list[len - 2]) {
        num_list.push(num_list[len-1] - num_list[len - 2]);
    } else {
        num_list.push(num_list[len-1] * 2);
    }
    return num_list;
}

solution([2, 1, 6]);


// 수 조작하기 1
// n = 0 / control = "wsdawsdassw" / result = -1

function solution(n, control) {
    let answer = 0;
    for(let i = 0; i < control.length; i++) {
        if(control.charAt(i) === "w") {
            n += 1;
        } else if (control.charAt(i) === "s") {
            n -= 1;
        } else if (control.charAt(i) === "d") {
            n += 10;
        } else if (control.charAt(i) === "a") {
            n -= 10;
        }
    }
    answer = n;
    return answer;
}

solution(0, "wsdawsdassw");


// 수 조작하기 2
// numLog = [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]	/ result = "wsdawsdassw"

function solution(numLog) {
    var answer = '';
    for(let i = 0; i < numLog.length-1; i++){
        if(numLog[i+1] - numLog[i] === 1){
            answer += "w";
        }else if(numLog[i+1] - numLog[i] === -1){
            answer += "s";
        }else if(numLog[i+1] - numLog[i] === 10){
            answer += "d";
        }else{
            answer += "a";
        }
    }
    // return answer;
}

solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]);


// 수열과 구간 쿼리 3
// arr = [0, 1, 2, 3, 4] / queries = [[0, 3],[1, 2],[1, 4]] / result = [3, 4, 1, 0, 2]

function solution(arr, queries) {
    for(let [i, j] of queries) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

solution([0, 1, 2, 3, 4], [[0, 3],[1, 2],[1, 4]]);


// 수열과 구간 쿼리 2
// arr = [0, 1, 2, 4, 3] / queries = [[0, 4, 2],[0, 3, 2],[0, 2, 2]] / result = [3, 4, -1]

function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        const a = arr.slice(s, e + 1).sort((a, b) => a - b);
        for(i of a) {
            if(i > k) return i;
        }
        return -1;
    });
}

solution([0, 1, 2, 4, 3], [[0, 4, 2],[0, 3, 2],[0, 2, 2]]);
