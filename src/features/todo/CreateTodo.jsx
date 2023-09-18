import { useState } from "react";
import { addTodo } from "./todoSlice";
import { useDispatch } from "react-redux";
function CreateTodo() {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(todo));
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
