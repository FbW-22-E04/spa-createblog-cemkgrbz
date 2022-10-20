import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreatePost(props) {

    const navigate = useNavigate()
    

    const [newPost, setNewPost] = useState({
        author: "",
        title: "",
        content: "",
        date: undefined,
    
    })

    const handleSubmit = () => {
        props.setShowPost([...props.showPost, newPost])
        navigate("/show-current-posts")
        console.log(newPost);
    }

    const handleChange = (e) => {
        setNewPost({
            ...newPost,
            date: new Date().toISOString(),
            [e.target.id]: e.target.value
        })
    }

    return ( 


        <div className="flex flex-col justify-center gap-5 items-center bg-slate-200 p-5">
           
                <label htmlFor="author">
                    Author
                <input id="author" type="text"                     onChange={handleChange}
/>
                </label>
                <label htmlFor="Title">
                    Title
                <input id="title" type="text"                     onChange={handleChange}
/>
                </label>
                <label htmlFor="Content" className="border-gray-400">
                    Content
                <textarea
                    onChange={handleChange}
                    name="textarea"
                    className="border-gray-400"
                    id="content"
                    cols="30"
                    rows="10"
                ></textarea>
                </label>

                <button className="bg-indigo-500 text-white p-2 rounded" type="submit" onClick={handleSubmit}>Create a Post</button>
        </div>
     );
}

export default CreatePost;