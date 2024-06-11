import { useParams } from "react-router-dom";
import { useGetOnePostQuery, useUpdatePostMutation } from "../store/myApi";
import { useEffect, useState } from "react";

const UpdatePost = () => {
    const { id } = useParams();
    const { data: post, isFetching, isError } = useGetOnePostQuery(id);
    const [ updatePost, result ] = useUpdatePostMutation();

    const handleSubmit = (e) => {
        e.preventDefault();

        const title = e.target.elements.title.value;
        const body = e.target.elements.description.value;

        updatePost({ id, title, body })
    }

    if(isFetching) return <h3>Loading...</h3>;
    if(isError) return <h3>Error</h3>;

    return (
        <>
            <h2>Update {id}</h2>
            <form
                onSubmit={handleSubmit}
            >
                <input 
                    type="text"
                    name="title"
                    defaultValue={post?.title}
                />
                <textarea
                    name="description"
                    defaultValue={post?.body}
                >
                </textarea>
                <button type="submit">update</button>
            </form>
        </>
    )
}
export default UpdatePost;