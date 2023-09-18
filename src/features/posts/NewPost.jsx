import { useState } from "react";
import { useDispatch } from "react-redux";
import { savePost } from "./postSlice";

const NewPost = () => {
    const [post, setPost] = useState({});
    const dispatch = useDispatch();

    const handleSavePost = (e) => {
        if (post.title === "" || post.content === "") {
            return;
        }
        e.preventDefault();
        dispatch(savePost(post));
        setPost({ title: "", content: "" });
    };
    return (
        <div>
            <h2>Add a New Post</h2>
            <form>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    className="input-field"
                    placeholder="Post Title"
                    value={post.title}
                    onChange={(e) =>
                        setPost({ ...post, title: e.target.value })
                    }
                />
                <textarea
                    className="input-field"
                    id="postContent"
                    name="postContent"
                    placeholder="Whats on your mind?"
                    value={post.content}
                    onChange={(e) =>
                        setPost({ ...post, content: e.target.value })
                    }
                    rows="4"
                />
                <button type="button" onClick={handleSavePost}>
                    Save Post
                </button>
            </form>
        </div>
    );
};
export default NewPost;
