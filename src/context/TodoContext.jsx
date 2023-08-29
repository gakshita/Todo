import { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";

const TodoContext = createContext();

const reducer = (state, action) => {
    let newState;
    let item;
    let index;
    switch (action.type) {
        case "ADD_TODO":
            newState = [action.payload, ...state.todos];
            localStorage.setItem("todos", JSON.stringify(newState));
            return { ...state, todos: newState };
        case "TOGGLE_TODO":
            newState = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        state: todo.state == "active" ? "completed" : "active"
                    };
                }
                return todo;
            });
            localStorage.setItem("todos", JSON.stringify(newState));

            return { ...state, todos: newState };

        case "DELETE_TODO":
            newState = state.todos.filter((todo) => todo.id != action.payload);
            localStorage.setItem("todos", JSON.stringify(newState));

            return { ...state, todos: newState };

        case "CLEAR_TODO":
            newState = state.todos.filter((todo) => todo.state === "active");
            localStorage.setItem("todos", JSON.stringify(newState));

            return { ...state, todos: newState };

        default:
            return state;
    }
};
const initialState = {
    todos: localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : []
};
export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addTodo = (todo) => {
        const unique_id = uuid();
        const small_id = unique_id.slice(0, 4);
        dispatch({
            type: "ADD_TODO",
            payload: { data: todo, state: "active", id: small_id }
        });
    };

    const toggleTodo = (id) => {
        dispatch({ type: "TOGGLE_TODO", payload: id });
    };

    const deleteTodo = (id) => {
        console.log("hii", id);
        dispatch({ type: "DELETE_TODO", payload: id });
    };

    const clearCompletedTodo = () => {
        dispatch({ type: "CLEAR_TODO" });
    };
    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                addTodo,
                toggleTodo,
                deleteTodo,
                clearCompletedTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
export default TodoContext;
