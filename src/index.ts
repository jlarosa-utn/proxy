import * as http from 'http'
import Server from 'http-proxy'
//
// Create your proxy server and set the target in the options.
//
const PORT = parseInt(process.env.PORT || "8000");
const URL_PROXY = process.env.URL_PROXY || `http://localhost:9000` 
Server.createProxyServer({target: URL_PROXY}).listen(PORT); // See (†)
 
//
// Create your target server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers));
  res.end();
}).listen(9000);