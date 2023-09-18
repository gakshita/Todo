import "./App.css";
import CreateTodo from "./features/todo/CreateTodo";
import Todos from "./features/todo/Todos";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./Navbar";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import NewPost from "./features/posts/NewPost";

function App() {
    return (
        <ThemeProvider>
            <div className="container">
                <NewPost />
                <PostsList />
            </div>
        </ThemeProvider>
    );
}

export default App;
