const array = [1, 3, 4, 7, 8, 9];
// let lar=0;
// let sec=0;
// for(let i=0;i<array.length;i++)
// {

//     if(array[i]>lar)
//     {
//         sec=lar;
//         lar=array[i];
//     }
//     else if(array[i]>sec&& array[i]!=lar)
//     {
//         sec=array[i];
//     }
// }

// console.log("second ",sec);
// console.log(lar+"largest ");

// 

// const arr = [1, 3, 4, 7, 3, 1, 9, 7, 4, 1];
// const map=new Map();
// for(let num of arr)
// {
//     if(map.has(num))
//     {
//         map.set(num,map.get(num)+1);
//     }
//     else
//     {
//         map.set(num,1);
//     }
// }

// const map=new Map();

// for(let num of arr)
// {
//     if(map.has(num))
//     {
//         map.set(num,map.get(num)+1);
//     }
//     else
//     {
//         map.set(num,1);
//     }
// }

// console.log(map);

// const str="aabbl";
// const map=new Map();

// for(let s of str)
// {
//     if(map.has(s))
//     {
//         map.set(s,map.get(s)+1)
//     }
//     else
//     {
//         map.set(s,1)
//     }
// }

// for(let s of str)
// {
//     if(map.get(s)===1)
//     {
//         console.log("first char..",s);
//         break;
//     }
// }
// console.log(map);


// const map=new Map();
// map.set("even",[]);
// map.set("odd",[]);

// for(let num of arr)
// {
//     // console.log(num);
//     if(num%2==0)
//     {
//         map.get("even").push(num)
//     }
//     else
//     {
//         map.get("odd").push(num);
//     }
// }

// console.log(map);

// const sen="the quick brown fox jumps over the lazy dog the fox was quick";
// const wordArr=sen.split(" ");
// console.log(wordArr);

// const map=new Map();

// for(let w of wordArr)
// {
//     if(map.has(w))
//     {
//         map.set(w,map.get(w)+1);
//     }
//     else
//     {
//         map.set(w,1);
//     }
// }
// console.log(map);


// const arr = [1, 3, 5, 5, 5, 5, 7, 123, 125]
// const x = 7;
// let f = -1;
// let l = -1;

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] != x) {
//         continue;
//     }
//     if (f === -1) {
//         f = i
//     }
//     l = i;
// }

// console.log(f, l);


const str="geeksforgeeks";
const map=new Map();
for(let s of str)
{
    if(map.has(s))
    {
        map.set(s,map.get(s)+1);
    }
    else
    {
        map.set(s,1);
    }
}
console.log(map);