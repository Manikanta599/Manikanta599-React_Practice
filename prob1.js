/* // Example usage
const input = {
    "a": {
        "b": {
            "c": 1
        }
    },
    "d": 2
};


let parentKey='';
for(let key in input)
{
    console.log(key);
    if(input.hasOwnProperty(key))
    {
        let newKey = parentKey ? `${parentKey}.${key}` : key;

        console.log(newKey);
    }
} */


    /* function flattenObject(obj, parentKey = '', result = {}) {
        // Iterate through each key in the object
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                // Construct the new key by appending the current key to the parent key
                let newKey = parentKey ? `${parentKey}.${key}` : key;
    
                // If the value is an object, recursively flatten it
                if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                    flattenObject(obj[key], newKey, result);
                } else {
                    // Otherwise, assign the value to the result object
                    result[newKey] = obj[key];
                }
            }
        }
        return result;
    }
    
    // Example usage
    const input = {
        "a": {
            "b": {
                "c": 1
            }
        },
        "d": 2
    };
    
    const output = flattenObject(input);
    console.log(output);
     */



function flattenObject(obj)
{

}

// Example usage
const input = {
    "a": {
        "b": {
            "c": 1
        }
    },
    "d": 2
};


let res={};

for(let key in input)
{
    console.log(key);

    if(typeof input[key]==='object' && input[key]!==null)
    {
        for(let nestkey in input[key])
        {
            console.log(nestkey);

            res[key+"."+nestkey]=input[key][nestkey];
        }
    }
    else
    {
        res[key]=input[key];
    }
}


console.log(res);


let inp ={a: 1, b: 2 }

let arr=[];

for(let key in inp)
{
    if(inp.hasOwnProperty(key))
    {
        arr.push([key,inp[key]])
    }
}

console.log(arr);
console.log(Object.entries(inp));

let ss={ a: 1, b: 2, c: 3 };
let sum=0;
for(let key in ss)
{
    sum+=ss[key]
}
console.log(sum);


let osum=Object.values(ss).reduce((acc,val)=>acc+val,0)
console.log(osum);

