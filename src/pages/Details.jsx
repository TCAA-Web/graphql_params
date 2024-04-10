import { useParams } from "react-router-dom";
import { useGetQuery } from "../hooks/useGetQuery";
import { getAllBlogs } from "../queries/getAllBlogs";
import { getBlogById } from "../queries/getBlogByID";

export const Details = () => {
  const { id } = useParams();

  console.log("ID", id);
  const { data, isLoading, error } = useGetQuery(getBlogById, "detailBlog", {
    blogID: id,
  });

  if (isLoading) {
    return <span>Loading....</span>;
  }

  if (error) {
    return <span>{error.message}</span>;
  }

  console.log("Data", data);

  return (
    <>
      <h1>Details</h1>

      <div>
        <h1>{data.blog.headline}</h1>
        <p>{data.blog.mardownContent}</p>
      </div>
    </>
  );
};
