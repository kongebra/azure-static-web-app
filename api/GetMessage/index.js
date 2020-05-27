module.exports = async function (context, req) {
  context.res = {
    body: {
      title: 'Lorem Ipsums',
      test: process.env.TEST_STRING,
      text: 'Hello from the API',
    },
    headers: {
      lorem: 'ipsum',
    },
  };
};
