import { useRef } from 'react';
import { useState } from 'react';
import {TextInputWithLabel} from '../../shared/TextInputWithLabel.jsx';
import {isValidTodoTitle} from '../../utils/todoValidation.js';



function TodoForm({ onAddTodo }) {
const inputRef = useRef();
const [workingTodo, setWorkingTodo] = useState('');






  const handleAddTodo = (event) => {
    event.preventDefault();

  
    // .trim prevents whitespace only todos
    const todoTitle = workingTodo.trim() ;
    if (todoTitle ) {
      onAddTodo(todoTitle);
      setWorkingTodo("");
      inputRef.current.focus();
    }
  };
  return (
  <form onSubmit={handleAddTodo}>
     
    <TextInputWithLabel
      type="text"
      elementId="todoTitle"
      labelText="Todo"
      value={workingTodo}
     onChange={(e)=> setWorkingTodo(e.target.value)}
     ref={inputRef}
    
    />
   
   <button disabled={!isValidTodoTitle(workingTodo)} >Add Todo</button>
  </form>
);

}

export default TodoForm;