const express = require('express');
const app = express();
const port = 5001;
const path = require('path');
const {handlePostRequest } = require('./public/route/route.js');

// 정적파일 제공을 위한 미들웨어 설정
app.use(express.static(path.join(__dirname, './public/static')));

// body-parser 미들웨어 설정
// 클라이언트에서 보낸 JSON 데이터를 요청 객체의 req.body에 파싱된 JavaScript 객체로 저장합니다.
app.use(express.json())
// app.use(bodyParser.json()); // app.use(express.json)과 같은 역할을 한다.

// 라우팅 모듈 등록
// app.get('/',handleGetRequest)

// 포스트 핸들러 사용
app.post('/submit',handlePostRequest)

// 서버 가동
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
