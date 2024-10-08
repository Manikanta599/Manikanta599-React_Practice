import React from 'react'
import Todo from './todo';
import ToDO from './todo';

const arr:string[]=["coding","coding","coding","coding","music"];
const TodoMain = () => {
  return (
    <div>
      {/* <Todo todos={arr}></Todo> */}
      {/* <ToDO todos={arr}/> */}
      <ToDO message='welcome' todos={arr}/>
    </div>
  )
}

export default TodoMain
