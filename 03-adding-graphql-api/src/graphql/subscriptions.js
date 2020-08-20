/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: String) {
    onCreateUser(id: $id) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String) {
    onUpdateUser(id: $id) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: String) {
    onDeleteUser(id: $id) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($authorId: String) {
    onCreatePost(authorId: $authorId) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($authorId: String) {
    onUpdatePost(authorId: $authorId) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($authorId: String) {
    onDeletePost(authorId: $authorId) {
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
