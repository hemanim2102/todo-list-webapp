import { useRef } from "react";
import styles from "./addtodo.module.css";

import { useContext } from "react";
import { TodoTaskList } from "../store/todoItemsStore";

function AddTodo() {

    const { AddTodoTask } = useContext(TodoTaskList);

    const todoNameElement = useRef();
    const todoDateElement = useRef();

    const FetchData = (event) => {
        event.preventDefault();
        const todoName = todoNameElement.current.value;
        const todoDate = todoDateElement.current.value;
        todoNameElement.current.value = " ";
        todoDateElement.current.value = " ";
        AddTodoTask(todoName, todoDate);
    }

    return (<div className="container text-center">
        <form className={`row ${styles.kgRow}`} onSubmit={FetchData}>
            <div className="col-6">
                <input type="text" ref={todoNameElement} placeholder="Enter todo here..." />
            </div>
            <div className="col-4">
                <input type="date" ref={todoDateElement} />
            </div>
            <div className="col-2">
                <button class={`${styles.kgBtn}`}>ADD</button>
            </div>
        </form>
    </div >
    );
}

export default AddTodo