const fs = require('fs')
const path = require('path')

const readFileAndParseASync = function (fileName, cookDataFunc) {
  const datapath = path.join(__dirname, `../data/${fileName}`)
  fs.readFile(datapath, 'utf8', (err, filedata) => {
    if (err) {
      throw new Error(`${fileName}을 읽지 못하였습니다.`)
    } else {
      try {
        let data = JSON.parse(filedata);

        // * parsingdata를 fs.writefile을 할 콜백함수
        cookDataFunc(data, datapath)

      } catch (parseError) {
        throw new Error(`데이터 파싱 오류: ${parseError.message}`);
      }
    }
  })

}

const cookQuestionDataFunc = function (parsedData, writefileFunc) {
  // *여기서 마음대로 조리
  const timestamp = new Date().toLocaleTimeString(); //시간보여주는 timestamp 
  parsedData.mainContent.inputRecords.push({
    "type": "user",
    // "message": `${newData}`,
    "timestamp": `${timestamp}`
  })

  // *writefile할 콜백함수
  writefileFunc(parsedData)
}

const writefileAsync = function (datapath, cookParsedData) {
  // ?parsedData를 가공한거를 writefile하고싶음.
  // ?여기 구간에서 가공을 해줘야하는데 모듈화를 하는 방법을 생각해보자.
  // * 여기서 데이터를 가공한거를 받아야함. 콜백함수 자리를 만들어서 여기서 가공을 한거를 writefile해보자.
  // * 밑에 writefile이 비동기함수이므로 위에 가공할 함수는 동기처리를 하거나 비동기처리를 await을 쓰든지해서 작업이 완료된 후에 writefile하게 로직을 짜야된다.
  //* 생각해보니 일반 함수는 동기함수이므로 걱정할 필요없을 것같다.

  fs.writeFile(datapath, JSON.stringify(cookParsedData, null, 2), (err) => {
    if (err) {
      throw new Error(`error writing ${cookParsedData}`)
    } else {
      console.log(`${datapath}에 ${JSON.stringify(cookParsedData, null, 2)}가 저장되었습니다.`)
    }
  })
}

readFileAndParseASync("questionData.json", (parsedData, datapath) => {
  cookQuestionDataFunc(parsedData, (cookedData) => {
    writefileAsync(datapath, cookedData)
  })
})