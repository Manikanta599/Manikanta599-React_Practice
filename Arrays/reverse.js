let fun=(arr)=>{

    let rev=[]
    
    for(let i=arr.length-1;i>=0;i--)
    {
        rev.push(arr[i])
    }
    console.log(rev)
}

let exampleArray = [1, 2, 3, 4, 5];
fun(exampleArray);

