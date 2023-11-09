const fs = require('fs')
const path = require('path')

function readFileAndParseASync (fileName,callback){
  fs.readFile(path.join(__dirname, `../data/${fileName}`),'utf8',(err,filedata)=>{
    if(err){
      throw new Error(`${fileName}을 읽지 못하였습니다.`)
    } else{
      try {
        const parsedData = JSON.parse(filedata);
        // * parsingdata를 fs.writefile을 할 콜백함수
        callback();
      } catch (parseError) {
        throw new Error(`데이터 파싱 오류: ${parseError.message}`);
      }
    }
  })
  
}

module.exports = readFileAndParseASync;