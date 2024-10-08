interface ToDoProps {
    todos: string[];
       message:string;
}

// const Todo: React.FC<ToDoProps> = ({ todos }) => {
//     return (
//         <div>
//             <h1>todo list</h1>
//             <ul>
//                 {todos.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

const ToDO=(props:ToDoProps)=>{

    const {todos}=props;
    const {message}=props;
    
    return(
        <div>
            {message}
            <h1>ToDO Lists</h1>
            <ul>
                {todos.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>

    )
}
// export default Todo;  

// const ToDO=({todos}:{todos:string[]})=>{
//     return(
//         <div>
//              <h1>ToDO Lists</h1>
//              <ul>
//                  {todos.map((item,index)=>(
//                      <li key={index}>{item}</li>
//                  ))}
//              </ul>
//          </div>
//     )
// }

// const ToDO=({message,todos}:{message:string,todos:string[]})=>{
//     return(
//         <div>
//             {message}
//             <div>
//                 {todos.map((item,index)=>(
//                     <li key={index}>{item}</li>
//                 ) )}
//             </div>
//         </div>
//     )
// }

export default ToDO;  