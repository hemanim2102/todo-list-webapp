import styles from "./todoItem.module.css";
import { useContext } from "react";
import { TodoTaskList } from "../store/todoItemsStore";

function TodoItem({ todoName, todoDate }) {

    const { DeleteTodo } = useContext(TodoTaskList);

    return (
        <div className="container">
            <div className={`row ${styles.kgRow}`}>
                <div className={`col-6 ${styles.todoName}`}>
                    {todoName}
                </div>
                <div className={`col-4 ${styles.todoDate}`}>
                    {todoDate}
                </div>
                <div className="col-2">
                    <button type="button" className={`${styles.kgBtn}`} onClick={() => DeleteTodo(todoName)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem