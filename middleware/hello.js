const hello = (request, response) => {
  response.send(`Hello ${request.query.name}`);
};

module.exports = {
  hello,
};
