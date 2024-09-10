// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function findLow(arr)
{
    let min=arr[0];
    for(a of arr)
    {
        if(a<min)
        {
            min=a;
        }
    }
    return min;
}

const heights2 = [167, 190, 120, 165, 137];
const lowest=findLow(heights2);
console.log(lowest);