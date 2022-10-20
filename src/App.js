import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react";
import Welcome from "./components/Welcome";
import CreatePost from "./components/CreatePost";
import ShowPost from "./components/ShowPost";
import SinglePost from "./components/SinglePost";





function App() {

  const [showPost, setShowPost] = useState([])
  // console.log(showPost)

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/create-a-post" element={<CreatePost showPost={showPost} setShowPost={setShowPost}   />} />
          <Route path="/show-current-posts" element={<ShowPost showPost={showPost} />} />
          <Route path="/show-posts/:singlePost" element={<SinglePost showPost={showPost} />}
          />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
