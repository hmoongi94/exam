const fs = require('fs')
const path = require('path')

const readFileAndParseASync = function(fileName, cookDataFunc){
  const datapath = path.join(__dirname, `../data/${fileName}`)
  fs.readFile(datapath,'utf8',(err,filedata)=>{
    if(err){
      throw new Error(`${fileName}을 읽지 못하였습니다.`)
    } else{
      try {
        data = JSON.parse(filedata);
        
        // * parsingdata를 fs.writefile을 할 콜백함수
        cookDataFunc(data,datapath)

      } catch (parseError) {
        throw new Error(`데이터 파싱 오류: ${parseError.message}`);
      }
    }
  })
  
}

module.exports = readFileAndParseASync;