import "./App.css";
import CreateTodo from "./features/todo/CreateTodo";
import Todos from "./features/todo/Todos";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./Navbar";
import Counter from "./features/counter/Counter";

function App() {
    return (
        <ThemeProvider>
            <div className="container">
                <Navbar />
                <CreateTodo />
                <Todos />
            </div>
        </ThemeProvider>
    );
}

export default App;
