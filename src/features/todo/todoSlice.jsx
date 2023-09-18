import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
    todos: localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : []
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload);
            const unique_id = uuid();
            const small_id = unique_id.slice(0, 4);
            state.todos = [
                { data: action.payload, state: "active", id: small_id },
                ...state.todos
            ];
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        state: todo.state == "active" ? "completed" : "active"
                    };
                }
                return todo;
            });
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id != action.payload
            );
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        clearCompletedTodo: (state) => {
            state.todos = state.todos.filter((todo) => todo.state === "active");
            localStorage.setItem("todos", JSON.stringify(state.todos));
        }
    }
});

export const { addTodo, toggleTodo, deleteTodo, clearCompletedTodo } =
    todoSlice.actions;
export default todoSlice.reducer;
