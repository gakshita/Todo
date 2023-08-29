import "./App.css";
import CreateTodo from "./components/createTodo";
import Todos from "./components/Todos";
import { TodoProvider } from "./context/TodoContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./Navbar";

function App() {
    return (
        <ThemeProvider>
            <div className="container">
                <Navbar />
                <TodoProvider>
                    <CreateTodo />
                    <Todos />
                </TodoProvider>
            </div>
        </ThemeProvider>
    );
}

export default App;
