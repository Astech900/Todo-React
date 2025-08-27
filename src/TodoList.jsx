import React, { useState } from "react";
import './Todo.css'
import { v4 as uuidv4 } from 'uuid';
import { faL } from "@fortawesome/free-solid-svg-icons";


function InputTodo() {

}


function Todo() {
    let ids = uuidv4()

    const [todo, setTodo] = useState([{ task: 'Programming', id: ids, isDone: false }]);
    const [mark, setMark] = useState(false);

    let addTodoList = () => {
        let todoData = document.getElementById('todotext').value;
        setTodo((prevTodo) => ([...prevTodo, { task: todoData, id: uuidv4() }]))
        console.log(todo)
        return document.getElementById('todotext').value = ''
    }


    let deleteTodo = (id) => {
        let copyTodo = todo.filter((todo) => todo.id != id)
        return setTodo([...copyTodo])
    }

    let upperCase = () => {
        let upperCaseArr = setTodo(todo.map(todo => {
            return {
                ...todo, isDone : true
            }
        }))
    }

    let oneUppercase = (id) => {

        setTodo(prevTodo => prevTodo.map(todo => {
            if (todo.id == id) {

                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                }

            } else {
                return todo
            }
        }))
    }

  
    let doneTodo = (id) => {

        setTodo(prevTodo => prevTodo.map(todos => {
            if (todos.id === id) {
                return {
                    ...todos, isDone : true
                }
            }
            else{
               return todos;
            }
        }))

    }


 






    return (
        <div className="todoContainer">
            <h2>Todo List</h2>
            <div className="iptTodo">
                <textarea name="text" id="todotext" placeholder="Write you Todo text" rows={6}></textarea>
                <button className="addTodoBtn" onClick={addTodoList}>Add</button>

                <ul style={{ position: 'relative' }}>
                    {todo.map((prevTodo) => { return prevTodo.task ? <li style={prevTodo.isDone ? { textDecoration: 'line-through' } : { textDecoration: 'none' }} key={prevTodo.id} > <span>{prevTodo.task} <button onClick={() => { doneTodo(prevTodo.id) }}>{prevTodo.isDone ? 'Doned' : 'Mark as Done'}</button> <button className="deleteTodo"><i className="fa-solid fa-trash" onClick={() => deleteTodo(prevTodo.id)}></i></button></span> <button onClick={() => oneUppercase(prevTodo.id)}>Uppercase</button></li> : null })}
                </ul>
            </div>
            <button onClick={upperCase}>Mark All As Done</button>
          
        </div >
    )
}



export default Todo;
