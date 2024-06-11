import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetOnePostQuery } from "../store/myApi";

const PostPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: post, isFetching, isError } = useGetOnePostQuery(id);

    if(isFetching) return <h3>Loading...</h3>;
    if(isError) return <h3>Error</h3>;

    return (
        <div>
            <button onClick={() => navigate("/")}>Home</button>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
        </div>
    )
}
export default PostPage;