import { gql } from "graphql-request";

export const getBlogById = gql`
  query getBlogByID($blogID: ID!) {
    blog(where: { id: $blogID }) {
      date
      headline
      id
      markdownContent
    }
  }
`;
