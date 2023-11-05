const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')
const port = 5001;

// 정적파일 제공을 위한 미들웨어 설정
app.use(express.static(path.join(__dirname, './public/static')));
// body-parser 미들웨어 설정
// 클라이언트에서 보낸 JSON 데이터를 요청 객체의 req.body에 파싱된 JavaScript 객체로 저장합니다.
app.use(express.json())
// app.use(bodyParser.json()); // app.use(express.json)과 같은 역할을 한다.

app.post('/submit', (req, res) => {
  const newData = req.body.data; // 클라이언트에서 보낸 데이터

  // 기존 JSON 파일에서 데이터 읽기
  let existingData = [];
  const questionDataPath = path.join(__dirname, './public/data/questionData.json')
  try {
      const questionfileData = fs.readFileSync(questionDataPath, 'utf8');
      existingData = JSON.parse(questionfileData);
  } catch (error) {
      console.error(error);
  }
  // 새 데이터를 배열에 추가
  existingData.push(newData);
  // JSON 파일에 데이터 쓰기
  fs.writeFileSync(questionDataPath, JSON.stringify(existingData), 'utf8');


  // 다른 JSON 파일에서 데이터 읽기
  let responseData = {};
  try {
      const answerDataPath = path.join(__dirname, './public/data/answerData.json')
      const answerFileData = fs.readFileSync(answerDataPath, 'utf8');
      responseData = JSON.parse(answerFileData);
      console.log(responseData)
  } catch (error) {
      console.error(error);
  }

  // 클라이언트에 응답
  res.json({ message: `서버에서 받은 데이터: ${newData}`, 
              responseData: `서버에서 응답하는 데이터: ${responseData.yes}`});
});



// 서버 가동
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
