import { Link } from "react-router-dom";
import { useGetQuery } from "../hooks/useGetQuery";
import { getAllBlogs } from "../queries/getAllBlogs";

export const Home = () => {
  const { data, isLoading, error } = useGetQuery(getAllBlogs, "allBlogs");

  if (isLoading) {
    return <span>Loading....</span>;
  }

  if (error) {
    return <span>{error.message}</span>;
  }

  console.log("Data", data);

  return (
    <>
      <h1>Welcome</h1>
      {data.blogs.map((blog) => {
        return (
          <Link to={`/details/${blog.id}`}>
            <h1>{blog.headline}</h1>
            <p>{blog.mardownContent}</p>
          </Link>
        );
      })}
    </>
  );
};
