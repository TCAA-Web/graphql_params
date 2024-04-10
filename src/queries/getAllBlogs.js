import { gql } from "graphql-request";

export const getAllBlogs = gql`
  query Blogs {
    blogs {
      headline
      date
      id
      markdownContent
      createdAt
    }
  }
`;
