export const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://bishalpb.herokuapp.com/'
    : 'http://localhost:4000/graphql';
