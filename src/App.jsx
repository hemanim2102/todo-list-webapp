import AppName from "./components/app-name";
import AddTodo from "./components/add-todo";
import TodoItemContainer from "./components/todo-item-container";
import WelcomeMsg from "./components/welcome-msg";
import "./App.css";

import TodoTaskListProvider, { TodoTaskList } from "./store/todoItemsStore";



function App() {

  return (
    <TodoTaskListProvider>
      <center className='todo-container'>
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMsg></WelcomeMsg>
        <TodoItemContainer></TodoItemContainer>
      </center >
    </TodoTaskListProvider>
  );
}

export default App
