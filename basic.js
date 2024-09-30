const obj=
{
    name:"mani",
    branch:'cse',
    id:599
}

console.log(obj);

console.log(JSON.stringify(obj));

var jsonstr=JSON.stringify(obj);

var jsonobj=JSON.parse(jsonstr);

console.log(jsonobj);