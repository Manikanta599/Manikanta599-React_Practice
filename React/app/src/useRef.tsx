import React,{useRef} from 'react'


//useState will re-render when the content change and update in ui
//useRef doesn't notify you when its content changes,mutating the(.current)
//property doesn't cause a re-render

//used for used for autofocusing the inputField -- for input fields
//used for storing prevois state values
//


// const UseRef = () => {
//     const data=useRef(null)
//     const handleSubmit=(e:React.ChangeEvent)=>{
//         e.preventDefault();
//         console.log(data)
//     }
//   return (
//     <div>
//       <center>
//         <form onSubmit={handleSubmit}>
//             <input ref={data} type='text' placeholder='enter name'></input> <br/>
//             <input type='submit'/>
//         </form>
//       </center>
//     </div>
//   )
// }

// export default UseRef
