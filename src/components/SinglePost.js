import { useParams, useNavigate } from "react-router-dom";

function SinglePost(props) {
  
    const { singlePost } = useParams();
    const navigate = useNavigate();

    const result = props.showPost.filter((item) => item.title === singlePost)[0];
    console.log(result)
    return (
        <div>
            <p>{result && result.content}</p>
            <button onClick={() => navigate("/create-a-post")}>Back</button>
        </div>
  );
}

export default SinglePost;