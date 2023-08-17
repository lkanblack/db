const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

server.listen(port, (err) => {
  if (err) {
    console.error("Error starting server:", err);
    process.exit(1); // Exit with an error code
  } else {
    console.log("Server listening on port " + port);
  }
});
