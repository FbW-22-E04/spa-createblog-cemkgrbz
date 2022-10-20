import { Link } from "react-router-dom";

function Header() {
    return ( 
        <div className="flex gap-5 m-3 text-sky-600">
            <Link to="/"><p>Home</p></Link>
            <Link to="/create-a-post"><p>Create A Post</p></Link>
            <Link to="/show-current-posts"><p>Show Current Posts</p></Link>
        </div>
     );
}

export default Header;