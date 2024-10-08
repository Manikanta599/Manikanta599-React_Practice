import React from 'react'
import Todo from './todo';

const arr:string[]=["coding","coding","coding","coding"];
const TodoMain = () => {
  return (
    <div>
      {/* <Todo todos={arr}></Todo> */}
      <Todo todos={arr}></Todo>
    </div>
  )
}

export default TodoMain
