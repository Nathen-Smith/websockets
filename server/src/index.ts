import server from "./Server";

// start the Express server
const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
