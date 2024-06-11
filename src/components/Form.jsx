import { useEffect } from "react";
import { useCreatePostMutation } from "../store/myApi";

const Form = () => {
    const [createPost, result] = useCreatePostMutation();

    const handleSubmit = (event) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const body = event.target.elements.description.value;

        createPost({ "userId": 1, title, body });
        event.target.reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="title"
                    name="title"
                />
                <textarea 
                    name="description"
                    placeholder="description"
                >

                </textarea>
                <button type="submit">
                    Add
                </button>
            </form>
            <br/>
        </>
    )
}
export default Form;