const http = reuqire("http");
const host = "localhost";
const port = 5000;

const requireListener = function (req, res){
    res.writeHead(200);
    res.end("My First Server!");
};

const server = http.createServer(requireListener);
// server.listen(port, host, () => console.log("Server is runningon ${port}")) {
    