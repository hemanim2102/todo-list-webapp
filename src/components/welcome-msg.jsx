import styles from "./welcomeMsg.module.css";
import { useContext } from "react";
import { TodoTaskList } from "../store/todoItemsStore"

const WelcomeMsg = () => {

    const contextObject = useContext(TodoTaskList);
    const tasklist = contextObject.list;

    return tasklist.length == 0 && <p className={styles.msg}>No tasks here...</p>

}

export default WelcomeMsg