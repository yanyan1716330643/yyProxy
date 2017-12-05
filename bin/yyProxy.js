#!/usr/bin/env node
let http = require("http");
let httpProxy = require("http-proxy");
let proxy = httpProxy.createProxy({});
let filePath = (process.argv && process.argv[2]) || "../proxyConfig";
let path = require("path")
let proxyConfig = require(path.join(filePath));
for(let obj of proxyConfig){
    let server = http.createServer(function (req, res) {
        proxy.web(req,res,{target:obj.targetUrl});
    });
    console.log(`port:${obj.port} targetUrl:${obj.targetUrl}`);
    server.listen(obj.port);
}
console.log("yyProxy is running...");
