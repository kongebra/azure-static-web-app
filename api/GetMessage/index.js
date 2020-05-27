module.exports = async function (context, req) {
  context.res = {
    body: {
      title: "Lorem Ipsums",
      text: "Hello from the API",
    },
    headers: {
      lorem: "ipsum",
    },
  };
};
