import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import AllPosts from "../pages/AllPosts/AllPosts";
import CreatePost from "../pages/CreatePost/CreatePost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/edit-post/:id" element={<CreatePost />} />
      </Route>
    </Routes>
  );
}

export default App;
