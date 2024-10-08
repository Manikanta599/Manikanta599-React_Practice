interface ToDoProps {
    todos: string[];
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

const Todo=(props:ToDoProps)=>{

    const {todos}=props;
    
    return(
        <div>
            <h1>ToDO Lists</h1>
            <ul>
                {todos.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>

    )
}
export default Todo;