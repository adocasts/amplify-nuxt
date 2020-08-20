/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        biography
        website
        createdAt
        posts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      biography
      website
      createdAt
      posts {
        items {
          id
          title
          summary
          body
          createdAt
          authorId
        }
        nextToken
      }
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      summary
      body
      createdAt
      authorId
      author {
        id
        email
        name
        biography
        website
        createdAt
        posts {
          nextToken
        }
      }
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        summary
        body
        createdAt
        authorId
        author {
          id
          email
          name
          biography
          website
          createdAt
        }
      }
      nextToken
    }
  }
`;
