import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
function Todos() {
    const { todos, toggleTodo, deleteTodo, clearCompletedTodo } =
        useContext(TodoContext);
    const [activeTab, setActiveTab] = useState(0);

    const getTodos = () => {
        switch (activeTab) {
            case 0:
                return todos;
            case 1:
                return todos.filter((todo) => todo.state === "active");
            case 2:
                return todos.filter((todo) => todo.state === "completed");
            default:
                return todos;
        }
    };
    return (
        <div>
            {getTodos().map((todo, key) => {
                return (
                    <div className="todo-item" key={key}>
                        <div
                            className={`${todo.state != "active" && "strike"}`}
                            onClick={() => toggleTodo(todo.id)}
                        >
                            <span>{todo.data}</span>
                        </div>
                        <div
                            className="cross"
                            onClick={() => deleteTodo(todo.id)}
                        >
                            ✕
                        </div>
                    </div>
                );
            })}

            <div className="bottom-status">
                <div>{todos.length} items to-do</div>
                <div className="select-options">
                    <button
                        className={`tab-button ${activeTab === 0 && "active"}`}
                        onClick={() => setActiveTab(0)}
                    >
                        All
                    </button>
                    <button
                        className={`tab-button ${activeTab === 1 && "active"}`}
                        onClick={() => setActiveTab(1)}
                    >
                        Active
                    </button>
                    <button
                        className={`tab-button ${activeTab === 2 && "active"}`}
                        onClick={() => setActiveTab(2)}
                    >
                        Completed
                    </button>
                </div>
                <button className="tab-button" onClick={clearCompletedTodo}>
                    Clear Completed
                </button>
            </div>
        </div>
    );
}

export default Todos;
