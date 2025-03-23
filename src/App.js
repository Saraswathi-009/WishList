import logo from './wishlist images.png';
import './App.css';
import {useState} from 'react';
import {v4 as uuid} from 'uuid';


function App() {
  const [todo,setTodo] = useState();
  const [todoList,setTodoList] = useState([]);

  const onTodoInputChange =(e) =>{
    setTodo(e.target.value);
  }

  const onAddTodoClick = () =>{
    setTodoList([...todoList,{id : uuid() , todo:todo , isCompleted:false}]);
    setTodo('');

  }
  const onDeleteClick = (id) =>{
    const updatedTodoList = todoList.filter(todo => todo.id !==id);
    setTodoList(updatedTodoList)
  }

  const onTodoCheckChange =(id)=>{
    const updatedTodoList = todoList.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted} : todo);
    setTodoList(updatedTodoList);

  }
  return (
    <div className="App" >
      <h1>My Wishlist</h1>
      <img src={logo} alt='wishlist' width='160px'/>
      <div>
      <input value={todo} onChange={onTodoInputChange} placeholder='Add your wishlist here.....'/>
      <button onClick = {onAddTodoClick}>Add</button>
      </div>
      <div>
        {
          todoList?.length>0 && todoList.map(todo =>(
            <div key={todo.id}>
              <label>
                <input onChange={() => onTodoCheckChange(todo.id)} type='checkbox'/>
                <span className={todo.isCompleted ? 'strike-through' : " "}>{todo.todo}</span>
              </label>
              <button onClick= {() => onDeleteClick(todo.id)}>Delete</button>
            </div>
          ))
        }
        
      </div>
      
    </div>
  );
}

export default App;
