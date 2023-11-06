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

//get 요청으로 메인페이지에 basicdata읽고 데이터값 쏴주기
    // app.get()
    // let basicData={}
    // try{
    //   const basicDataPath = path.join(__dirname, './public/data/basicData.json');
    //   const basicFileData = fs.readFileSync(basicDataPath,'utf-8')
    //   basicData = JSON.parse(basicFileData)
    //   console.log(basicData)

    // } catch(error){
    //   console.error(error)
    // }

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
  let responseMessage = ""
  try {
      const answerDataPath = path.join(__dirname, './public/data/answerData.json')
      const answerFileData = fs.readFileSync(answerDataPath, 'utf8');
      responseData = JSON.parse(answerFileData);
      // 응답에 조건걸어줘보기
     if(typeof(newData)==="1234"){
      responseMessage = responseData.yes
     } else if(newData === "123"){
      responseMessage = responseData.no
     } else{
      responseMessage = responseData.yes
     }
      
  } catch (error) {
      console.error(error);
  }

  let styleData={}
  try{
    const styleDataPath = path.join(__dirname, './public/data/styleData.json');
    const styleFileData = fs.readFileSync(styleDataPath,'utf-8')
    styleData = JSON.parse(styleFileData)
    // console.log(styleData)

  } catch(error){
    console.error(error)
  }

  // 클라이언트에 응답
//   console.log(typeof(newData))
  res.json({ inputData: `질문 내용: ${newData}`, 
            responseData: `답변 내용: ${responseMessage}`,
            styleData
})
});



// 서버 가동
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
