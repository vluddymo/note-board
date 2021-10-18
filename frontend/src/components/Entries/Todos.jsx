import React, {useContext} from "react";
import {NoteStateContext} from "../../context/notes/noteContext";
import Todo from "./Todo/Todo";


export default function Todos() {

    const {todos} = useContext(NoteStateContext);

    return (
    <>
        {todos.sort((todo1, todo2) => todo1.task.localeCompare(todo2.task)).map((todo)=> (
            <Todo
                key={todo.todoId}
                todo={todo}
            />
            ))}
    </>
)}