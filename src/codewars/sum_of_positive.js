//You get an array of numbers, return the sum of all of the positives ones.
//Вы получаете массив чисел, возвращаете сумму всех положительных значений.
//Note: if there is nothing to sum, the sum is default to 0.
//Примечание: если суммировать нечего, сумма по умолчанию равна 0.


function positiveSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > 0) sum += arr[i];
    }

    return sum;
}

//function positiveSum(arr) {
//    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
// }

//function positiveSum (arr) {
//   return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
// }


