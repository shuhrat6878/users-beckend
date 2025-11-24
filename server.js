const express = require("express");
const jsonServer = require("json-server");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(express.json());

// sekin ishlatish uchun delay (ixtiyoriy)
server.use((req, res, next) => {
  setTimeout(next, 500);
});

// JSON-server router NI DARHOL ULASH SHART
server.use(router);

// EXPRESS ga JSON-serverni bog‘lash
app.use(server);

const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
