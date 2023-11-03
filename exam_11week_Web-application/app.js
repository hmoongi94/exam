const express = require('express');
const app = express();
const path = require('path');
const port = 5001;

// 정적파일 제공을 위한 미들웨어 설정
app.use(express.static(path.join(__dirname, './public/static')));
// body-parser 미들웨어 설정
// json파일에 넣을 데이터 파싱하기?
app.use(express.json())


// 서버 가동
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
