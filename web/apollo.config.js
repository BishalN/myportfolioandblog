module.exports = {
  client: {
    includes: ['src/graphql/**/*.ts'],
    service: {
      name: 'graphqlServer',
      url: 'https://bishalpb.herokuapp.com/graphql',
    },
  },
};
