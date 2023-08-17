const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 81; // Изменили порт на 81

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  const host = "www.bamofy.krabu.tech"; 
  console.log(`Server is running at: http://${host}:${port}/`);

}).on("error", (err) => {
  console.error("Error starting server:", err);
  process.exit(1); 
});
