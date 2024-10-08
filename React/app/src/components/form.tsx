import React, { ChangeEvent, useState } from 'react'

interface FormData
{
    name:string,
    email:string,
    age:number|string,
}

const Form = () => {
    const [data,setData]=useState<FormData[]>([]);
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=e.target;
        setData({...data,[name]:value});
        // console.log(data);
    }

  function handleSubmit(): void {
    // throw new Error('Function not implemented.');
    console.log(data);
  }

    // const handle=(e:React.)


    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Name: </label>
            <input
            type='text'
            onChange={handleChange}
            ></input>
        </div>
        <div>
            <label>email: </label>
            <input
            type='text'
            onChange={handleChange}
            ></input>
        </div>
        <div>
            <label>age: </label>
            <input
            type='text'
            onChange={handleChange}
            ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
