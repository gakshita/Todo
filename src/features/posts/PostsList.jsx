import { useSelector, useDispatch } from "react-redux";
import { selectPosts } from "./postSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrashCan,
    faThumbsUp,
    faThumbsDown
} from "@fortawesome/free-solid-svg-icons";
import {
    faTrashCan as regTrashCan,
    faThumbsUp as regThumbsUp,
    faThumbsDown as regThumbsDown
} from "@fortawesome/free-regular-svg-icons";
import { deletePost, react } from "./postSlice";
import { useState } from "react";
const PostsList = () => {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();
    const [itemToDelete, setItemToDelete] = useState(-1);
    const renderedPosts = posts.map((post) => {
        return (
            <div className="todo-item" key={post.id}>
                {/* <div> */}
                <div className="top">
                    <span className="title">{post.title}</span>
                    <div
                        onClick={() => dispatch(deletePost(post.id))}
                        onMouseEnter={() => setItemToDelete(post.id)}
                        onMouseLeave={() => setItemToDelete(-1)}
                    >
                        {itemToDelete == post.id ? (
                            <FontAwesomeIcon icon={faTrashCan} />
                        ) : (
                            <FontAwesomeIcon icon={regTrashCan} />
                        )}
                    </div>
                </div>
                <p>
                    {post.content.substring(0, 100)}
                    {post.content.length > 100 && "..."}
                </p>
                <div
                    className="reactions"
                    onClick={() => dispatch(react(post.id))}
                >
                    {post.like ? (
                        <FontAwesomeIcon icon={faThumbsUp} />
                    ) : (
                        <FontAwesomeIcon icon={faThumbsDown} />
                    )}
                </div>{" "}
            </div>
        );
    });

    return (
        <div>
            <h2>Posts</h2>
            {renderedPosts}
        </div>
    );
};

export default PostsList;
