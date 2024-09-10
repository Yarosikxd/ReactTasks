import React, { useState, useEffect } from "react";
import "./style.css";
import { stopBubbling } from "./utils/clickFns";

function Todos() {
  const API = "https://jsonplaceholder.typicode.com/todos";
  const DEFAULT_NEW_TODO = {
    title: ``,
    Completed: false,
  };

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ DEFAULT_NEW_TODO });

  const getTodos = async () => {
    try {
      const request = await fetch(API),
        response = await request.json();

      setTodos(response.slice(0, 10));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleItemDelete = async (id) => {
    try {
      await fetch(API + `/${id}`, { method: `DELETE` });
      setTodos((prevState) => prevState.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const getListItemClassName = (item) => {
    const classes = [];

    if (item.completed) classes.push(`item__completed`);

    return classes.join(` `);
  };

  const handleItemCompleted = async (item) => {
    try {
      const request = await fetch(API + `/${item.id}`, {
          method: `PUT`,
          body: JSON.stringify({ ...item, completed: !item.completed }),
          headers: {
            "Content-type": "application/json",
          },
        }),
        response = await request.json();

      setTodos((prevState) =>
        prevState.map((item) => {
          if (item.id === response.id) item = response;
          return item;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleNewTodoTitle = (event) => {
    setNewTodo(prevState => ({...prevState, title: event.target.value}));
  }

  const handleNewTodoCompleted = (event) => {
        setNewTodo(prevState => ({...prevState, completed:event.target.checked}));
   }

  const handleNewTodoSubmit = async (event) =>{
    event.preventDefault();

    try{
        const request = await fetch(API, {
            method: `POST`,
            body: JSON.stringify(newTodo),
            headers:{
                "Content-type":"application/json"
            }
        }),
        response =  await request.json();

        setTodos(prevState => [...prevState, response]);
    }catch(err){
        console.log(err);
    }
  } 

  return (
    <>
      <form className="todos__form" onSubmit={handleNewTodoSubmit}>
        <label>
          Title: <input type="text" defaultValue={newTodo.title} onChange={handleNewTodoTitle} />
        </label>
        <label>
          Completed: <input type="checkbox" defaultChecked={newTodo.completed} onChange={handleNewTodoCompleted} />
        </label>

        <button> Add New Todo</button>
      </form>

      {todos.length ? (
        <ul>
          {todos.map((item) => (
            <li
              className={getListItemClassName(item)}
              key={item.id}
              onClick={() => handleItemCompleted(item)}
            >
              {item.title}{" "}
              <button
                onClick={(event) =>
                  stopBubbling(event, () => handleItemDelete(item.id))
                }
              >
                {" "}
                Delete{" "}
              </button>{" "}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export default Todos;
