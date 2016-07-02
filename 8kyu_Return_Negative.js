//Challenge: https://www.codewars.com/kata/55685cd7ad70877c23000102

function makeNegative(num){
    if(num <= 0){
        return num
    }
    else{
        return num - (num * 2)
    }
}
