import { Link } from "react-router-dom";

function ShowPost(props) {
    return ( 
        <div className="bg-slate-200 p-5 m-5">
            <p className="text-center text-bold text-2xl bg-slate-300 p-5 m-3">Good morning Developers!</p>
            {
                props.showPost.map((item,idx) => {
                    return (
                        <div key={idx}>
                            <Link to={`/show-posts/${item.title}`} className="text-sky-600 m-5">
                                Read the full article
                            </Link>
                            <p className="bg-slate-300 p-4 m-4">
                                {item.author} wrote at: {item.date}
                            </p>
                        </div>
                    )
                })
            }
        </div>
     );
}

export default ShowPost;