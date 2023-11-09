const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const readFileAndParseASync = require('./readFile.js')
const cookDataFunc = require('./cookData.js')
const writefileAsync = require('./writefile.js')

//html파일 '/'메인페이지에 쏴주기
router.get("/", (req, res) => {
  res.sendFile(__dirname + "../public/index.html");
});

// get 요청으로 메인페이지에 basicdata읽고 데이터값 쏴주기
router.get("/basicdata", (req, res) => {
  // basicdata.json 파일 읽기
  const basicDataFilePath = path.join(__dirname,'../data/basicData.json')
  fs.readFile(basicDataFilePath, (err, data) => {
    if (err) {
      res.status(500).send("Internal Server Error");
    } else {
      res.send(JSON.parse(data));
      // res.end(JSON.parse(data));
      // res.json(JSON.parse(data));
      //* readfile을 했을 때는 문자열 또는 버퍼형식으로 데이터를 가지고있음? 그래서 data를 먼저 json.parse를 해줘야함. 
      //* res.end()는 데이터를 보내고 서버를 끊어버림. 다른 작업이 더 있으면 res.end()는 쓰면 안되는 듯.
      
    }
  });
});


// form의 post요청 처리
router.post('/submit', (req, res) => {
  const newData = req.body.data; // 클라이언트에서 보낸 데이터
  const timestamp = new Date().toLocaleTimeString(); //시간보여주는 timestamp 생성
  
  try {
    let Data = {}
    let datapath = ""
    readFileAndParseASync('questionData.json', datapath, Data, function(){
      cookDataFunc(Data,function(){
        writefileAsync(datapath, Data)
      })
    })
    

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error")
  }

  res.json({
    inputData: `질문 내용: ${newData}`
    // ,responseData: `답변 내용: ${responseMessage}`,
    // styleData
  })
});

module.exports = {
  handleGetRequest: router.get('/'),
  handlebasicDataRequest: router.get("/basicdata"),
  handlePostRequest: router.post('/submit')
}