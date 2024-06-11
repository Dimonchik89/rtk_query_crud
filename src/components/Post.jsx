import { useNavigate } from "react-router-dom";
import { useDeletePostMutation, useUpdatePostMutation } from "../store/myApi";
import { useEffect, useState } from "react";

const Post = ({ title, id }) => {
    const navigate = useNavigate();
    const [deletePost, result] = useDeletePostMutation();
    const [showCahngeInput, setShoweChangeInput] = useState(false);
    const [ updatePost ] = useUpdatePostMutation();

    const handleDelete = () => {
        deletePost(id);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const title = e.target.elements.title.value;

        updatePost({ id, title });
        setShoweChangeInput(false);
    }

    useEffect(() => {
        console.log("render");
    }, [])

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                <h3 onClick={() => navigate(`posts/${id}`)}>
                    {title}
                </h3>
                <div>
                    <button
                        onClick={() => {
                            // navigate(`posts/update/${id}`)
                            setShoweChangeInput(prev => !prev)
                        }}
                    >
                        update
                    </button>
                    <button onClick={handleDelete}>
                        X
                    </button>
                </div>
            </div>
            {showCahngeInput && 
                <form onSubmit={handleSubmit}>
                    <input 
                        name="title"
                        type="text" 
                        defaultValue={title} 
                    />
                    <button type="submit">Save</button>
                </form>
            }
            
        </div>
    )
}
export default Post;