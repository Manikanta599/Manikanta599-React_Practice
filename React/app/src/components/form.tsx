// import React, { ChangeEvent, useState } from 'react'

import React, { useState } from "react"

// interface FormData
// {
//     name:string,
//     email:string,
//     age:number|string,
// }

// const Form = () => {
//     const [data,setData]=useState<FormData[]>([]);
//     const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
//         const{name,value}=e.target;
//         setData({...data,[name]:value});
//         // console.log(data);
//     }

//   function handleSubmit(): void {
//     // throw new Error('Function not implemented.');
//     console.log(data);
//   }

//     // const handle=(e:React.)


    
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//             <label>Name: </label>
//             <input
//             type='text'
//             onChange={handleChange}
//             ></input>
//         </div>
//         <div>
//             <label>email: </label>
//             <input
//             type='text'
//             onChange={handleChange}
//             ></input>
//         </div>
//         <div>
//             <label>age: </label>
//             <input
//             type='text'
//             onChange={handleChange}
//             ></input>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Form 


export const FormEx=()=>{
  const [data,setData]=useState({
  });

  const handleCahnge=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const{name,value}=e.target; 
    console.log(e.target.value)
    console.log(name,value)
    setData((prevData)=>({
      ...prevData,
      [name]:value,
    }))
  };

  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    console.log(data);
  }


  return(
    <div>
    <form onSubmit={handleSubmit}>
    <div> 
    <label>Enter name </label>
      <input type="text" placeholder="enter name" name="name" onChange={handleCahnge} ></input>
    </div>
    <div>
    <label>Enter email </label>
    <input type="text" placeholder="enter email" name="email"  onChange={handleCahnge} ></input>
    </div>
    <button type="submit">submit</button>
    </form>
    </div>
  );
}
