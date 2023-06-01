// 길이에 따른 연산
// 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return
// result = 51

const num_list =[3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]; 

function solution(num_list) {
    var answer = 0;
    let double = 1;
    for (let i = 0; i < num_list.length; i++) {
        if(num_list.length >= 11) {
            answer += num_list[i];
        } else {
            double *= num_list[i];
            answer = double;
        }
    }
    return answer;
    // console.log(answer);
}

solution(num_list);