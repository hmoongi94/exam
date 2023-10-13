const http = require("http")
const fs = require("fs")

const contentType = {
  'Content-Type': 'text/html',
  'charset': 'utf-8',
}

const server = http.createServer(function(request,response){

  if(request.method !== "GET"){
    throw new Error("해당서버는 get요청처리만 가능하게끔 만들어졌습니다.")
  }
  if(request.url === "/hmoongi94"){
    response.writeHead(200, contentType);
    response.end();
  }
  
  else{
    response.writeHead(404, contentType);
    response.end('error:404')
  }
})

server.listen(8080,function(){
  console.log('localhost:8080/hmoongi94 서버가 가동중입니다. 끄려면 Ctrl+C를 누르세요.')
})