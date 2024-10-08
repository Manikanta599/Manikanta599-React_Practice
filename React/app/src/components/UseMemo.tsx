import React from 'react'

const UseMemo = () => {
    const[counter,setCounter]=React.useState(0);
    const[number,setNumber]=React.useState(5);
    // const factorial=fact(number);

    const factorial=React.useMemo(()=>fact(number)
    ,[number]);


  return (
    <div>
      <center>
        factorial{factorial}<br></br>
        <span>{counter}</span><br></br>
        <button onClick={()=>setCounter(prev=>prev+1)}>Counter Inc</button>
        <button onClick={()=>setNumber(number+1)}>number +</button>


      </center>
    </div>
  )
}


function fact(number: number) {
    let res=1;
    for(let i=number;i>=1;i--)
    {
        res=res*i;
    }
    console.log("Fact fun caling")
    return res;
}

export default UseMemo

