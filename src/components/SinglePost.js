import { useParams, useNavigate } from "react-router-dom";

function SinglePost(props) {
  
    const { singlePost } = useParams();
    const navigate = useNavigate();

    const result = props.showPost.filter((item) => item.title === singlePost)[0];
    console.log(result)

    const handleBack = () => navigate("/show-current-posts")


    
    return (
        <div>
            <div className="">
            <p className="rounded bg-slate-600 p-2 w-[70%] m-auto mt-48 text-white"> {result && result.content}</p>
            </div>
   
            
            <p onClick={handleBack} className="text-center bg-slate-400 p-2 rounded m-auto mt-5 cursor-pointer w-32">Back</p>
        </div>
  );

}

export default SinglePost;