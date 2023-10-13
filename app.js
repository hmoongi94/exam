const http = require("http")
const fs = require("fs")
const { request } = require("http")

http.createServer(function(requset,response){
  if(request.method !== "GET"){
    throw new Error("해당서버는 get요청처리만 가능하게끔 만들어졌습니다.")
  }
  if(request.url === "/hmoongi94"){
    response.writeHead(200, "utf-8", {"Content-Type":"text/html"});
    response.end(두더지잡기게임);
  }
  
  const getRoute = (requestUrl) => {

  }
})