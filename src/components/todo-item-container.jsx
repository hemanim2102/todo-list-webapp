import { TodoTaskList } from "../store/todoItemsStore";
import { useContext } from "react";
import TodoItem from "./todo-item";
import styles from "./todoitemcontainer.module.css";

const TodoItemContainer = () => {

    const { list } = useContext(TodoTaskList);

    return <>
        <div className={styles.todoItem}>
            {list.map(item =>
                <TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate}></TodoItem>
            )}
        </div>
    </>
}

export default TodoItemContainer