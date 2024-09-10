// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function totalMoney(lap,tab,mob)
{
    let a=lap*35000,b=tab*15000,c=mob*20000;
    return a+b+c;
}

let number=[5,2,7];
let result=totalMoney(number[0],number[1],number[2]);
console.log(result);