import { createContext } from "react";
import { useState, useReducer } from "react";

export const TodoTaskList = createContext({
    //this can be done to give a basic structure to the context and will help to autodetect while using.(not necessary, will work fine without it.)
    list: [],
    AddTodoTask: () => { },
    DeleteTodo: () => { },
});

const todoItemsReducer = (currState, action) => {

    let newTodoItemList = currState;

    if (action.type === "NEW_ITEM") {
        var addedItem = new Object();
        addedItem.name = action.payload.name;
        addedItem.dueDate = action.payload.dueDate;
        newTodoItemList = [addedItem, ...currState];
    }
    else if (action.type === "DELETE_ITEM") {
        newTodoItemList = currState.filter(item => item.name !== action.payload.itemName);
    }
    return newTodoItemList;
}

const TodoTaskListProvider = ({ children }) => {

    //let [taskList, setTaskList] = useState([]);
    const [taskList, dispatchTodo] = useReducer(todoItemsReducer, []);

    let AddTodoTask = (name, dueDate) => {

        const newItemAction = {
            type: "NEW_ITEM",
            payload: {
                name,
                dueDate
            }
        };

        dispatchTodo(newItemAction);

        // setTaskList((currValue) => {
        //   var addedItem = new Object();
        //   addedItem.name = name;
        //   addedItem.dueDate = dueDate;
        //   let tasksList = [addedItem, ...currValue];
        //   return tasksList;
        // })
    }

    let DeleteTodo = (itemName) => {

        const deleteItemAction = {
            type: "DELETE_ITEM",
            payload: {
                itemName
            }
        };

        dispatchTodo(deleteItemAction);

        // const newItemList = taskList.filter(item => item.name !== itemName);
        // setTaskList(newItemList);
    }


    return <TodoTaskList.Provider value={{
        list: taskList,
        AddTodoTask,
        DeleteTodo,
    }}>
        {children}
    </TodoTaskList.Provider>
}

export default TodoTaskListProvider