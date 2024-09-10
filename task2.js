// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


function findLow(arr)
{
    let min=arr[0];
    for(a of arr)
    {
        if(a.length<min.length)
        {
            min=a;
        }
    }
    return min;
}

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const lowest=findLow(heights2);
console.log(lowest);