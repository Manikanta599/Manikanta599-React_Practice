import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import UseMemo from './components/UseMemo';
import TodoMain from './components/todo/todoMain';
// import UseRef from './useRef';
import { createContext,useState } from 'react';
import ComponentA from './components/contextAPI/componentA';
import ComponentB from './components/contextAPI/componentB';
import TableInputs from './components/table';

export const store=createContext({});

function App() {
  const [data,setdata]=useState<number>(0);
  return (
  //  <h1>hello </h1>
  // <Form/>
  // <UseMemo/>
  // <TodoMain/>
  // <UseMemo/>

  // <UseRef/>
<>
{/* <store.Provider value={[data,setdata]}>
  <ComponentA/>
  <ComponentB/>
</store.Provider> */}
<TableInputs/>

</>
  
  

  );
}

export default App;
