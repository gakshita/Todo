import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
function CreateTodo() {
    const { addTodo } = useContext(TodoContext);
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Create a new todo..."
                className="input-field"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
        </form>
    );
}
export default CreateTodo;
