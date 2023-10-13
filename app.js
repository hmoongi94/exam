const http = require("http")
const fs = require("fs");

const contentType = {
  "Content-Type": "text/html",
}

const contentimgType = {
  'Content-Type' : 'image/jpeg',
}

const contentimgType2 = {
  'Content-Type' : 'image/jpng',
}


const server = http.createServer(function(request,response){

  if(request.method !== "GET"){
    throw new Error("해당서버는 get요청처리만 가능하게끔 만들어졌습니다.")
  }
  
  else if(request.url === "/hmoongi94"){
    fs.readFile("./static/index.html", "utf-8", function(err, data){
      if(err){
        console.log('파일을 읽지 못했습니다.')
      } else {
        response.writeHead(200, contentType)
        response.end(data)
      }
    })
  }
  



  else if(request.url === "/hmoongi94image"){
    fs.readFile("./static/image/두더지게임배경.jpg", function(err,data){
      if(err){
      console.log("두더지게임배경화면을 불러오지 못했습니다.")
      } else{
      response.writeHead(200, contentimgType)
      response.end(data)
      }
    })
  }

  else if(request.url === "/hmoongi94image2"){
    fs.readFile("./static/image/디그다.png", function(err,data){
      if(err){
        console.log("디그다사진을 불러오지 못했습니다.")
      } else{
        response.writeHead(200, contentimgType2)
        response.end(data)
      }
    })
  }

  else if(request.url === "/hmoongi94image3"){
    fs.readFile("./static/image/뿅망치.png",function(err,data){
      if(err){
        console.log("뿅망치사진을 불러오지 못했습니다.")
      } else{
        response.writeHead(200, contentimgType2)
        response.end(data)
      }
    })
  }

  else {
    response.writeHead(404, contentType);
    response.end('error:404')
  }

})
    //try catch finally -> else if 안썼을 경우, 
    // try {
    //   nonExistentFunction();
    // } catch (error) {
    //   console.error(error);
    //   // Expected output: ReferenceError: nonExistentFunction is not defined
    //   // (Note: the exact output may be browser-dependent)
    // }



server.listen(8080,function(){
  console.log('http://localhost:8080/hmoongi94 서버가 가동중입니다. 끄려면 Ctrl+C를 누르세요.')
})