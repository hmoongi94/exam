const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const readFileAndParseASync = require('./readFile.js')
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
  
  let questionData = {}
  // 기존 JSON 파일에서 데이터 읽기
  try {
    // questionData.json을 읽고 변수 jsonData에 questionData.json 데이터를 객체로 파싱한 후에 넣어준다.
    fs.readFile(questionDataPath, 'utf-8', (err, data) => {
      if (err) {
        throw new Error(`error reading ${datajson}`)
        console.log("error reading questionData.json")
        res.status(500).send("Internal Server Error")
      } else {
        questionData = JSON.parse(data)
        // console.log(questionData)

        // 새 데이터를 questiondata에 넣기
        questionData.mainContent.inputRecords.push({
          type: "user",
          message: newData,
          timestamp: timestamp
        })

        // newdata가 들어간 questiondata를 questiondata.json에 갱신해주기 
        fs.writeFile(questionDataPath, JSON.stringify(questionData, null, 2), (err) => {
          if (err) {
            console.error("error writing question.json", err);
            res.status(500).send("Internal Server Error")
          } else {
            // console.log(questionData)
            console.log("questiondata.json에 저장이 되었습니다.")
          }
        })

      }
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