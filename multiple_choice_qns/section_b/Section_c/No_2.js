function sumOfAllEvenNumbers (arr){
    return arr.filter(num => num % 2 === 0 ).reduce((sum,num) => sum+num, 0);
}

console.log(sumOfAllEvenNumbers([0,1,2,3,4,5,6,7,8,9,10]))