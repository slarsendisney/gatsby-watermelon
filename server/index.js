const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const compression = require("compression");

const dev = !(process.env.NODE_ENV === "production");

app.use(compression());
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

if (dev) {
  require("dotenv").config();
  const proxy = require("http-proxy-middleware");
  app.use(
    proxy({
      target: "http://localhost:5051",
      changeOrigin: true,
      ws: true
    })
  );
}

const server = http.createServer(app);

const port = process.env.PORT || 3000;
server.listen(port, () =>
  console.log(`🍉 Up and running on http://localhost:${port}`)
);

const io = dev
  ? require("socket.io")(server, {
      transports: ["xhr-polling"]
    })
  : require("socket.io")(server);

io.on("connection", function(socket) {
  console.log("socket connected: " + socket.id);
  socket.on("action", action => {
    if (action.type === "server/hello") {
      console.log("got hello data!", action.data);
      socket.emit("action", { type: "message", data: "🍉 says hey!" });
    }
  });
});
