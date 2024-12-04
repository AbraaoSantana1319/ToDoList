import React from 'react';
import { useState } from 'react';
import "./ToDoList.css";

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setImputValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim() !== ''){
            const newTodo = {
                id: Date.now(),
                text: inputValue
            }

            setTodos((prevTodos) => [...prevTodos, newTodo])
            setImputValue("")
        }
    }
  return (
    <div className='app-container'>
        <h1 className="title">To do app componet</h1>
        {todos.length === 0 && <p className='empty'>Não há tarefas.</p>}
        <form onSubmit={handleSubmit} className='forme-container'>
            <input className='input-field' type="text" placeholder='Adicione uma tarefa...'
            value={inputValue}
            onChange={(e) => setImputValue(e.target.value)}/>
            <button type='submit' className='add'>Adionar</button>
        </form>
        

            <ul className='list'>
                {todos.map((todo) => (
                    <li key={todo.id} className='item'>
                        {todo.text}
                    </li>
                ))}
            </ul>
    </div>
  );
}

export default ToDoList;
