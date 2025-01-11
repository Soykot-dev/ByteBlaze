import { useEffect, useState } from "react";
import { getBlogs, removeBlog } from "../Utilities";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);
  const handleDelete = (id) => {
    removeBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
}
  if(blogs.length === 0) return <EmptyState message="No bookmarks available" label="Go To Blogs" address="/blogs"></EmptyState>
  return (
    <div className="px-8 mt-8 grid justify-center grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {
        blogs.map(blog => <BlogCard deletable={true} handleDelete={handleDelete} key={blog.id} blog={blog}></BlogCard>)
      }
    </div>
  );
};

export default Bookmarks;