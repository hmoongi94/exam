const fs = require('fs')
const path = require('path')

function writefileAsync(path, cookParsedData) {
  // ?parsedData를 가공한거를 writefile하고싶음.
  // ?여기 구간에서 가공을 해줘야하는데 모듈화를 하는 방법을 생각해보자.
  // * 여기서 데이터를 가공한거를 받아야함. 콜백함수 자리를 만들어서 여기서 가공을 한거를 writefile해보자.
  // * 밑에 writefile이 비동기함수이므로 위에 가공할 함수는 동기처리를 하거나 비동기처리를 await을 쓰든지해서 작업이 완료된 후에 writefile하게 로직을 짜야된다.
  //* 생각해보니 일반 함수는 동기함수이므로 걱정할 필요없을 것같다.

  fs.writefile(path, JSON.stringify(cookParsedData, null, 2), (err) => {
    if (err) {
      throw new Error(`error writing ${cookParsedData}`)
    } else {
      console.log(`${path}에 ${cookParsedData}가 저장되었습니다.`)
    }
  })
}

module.exports = writefileAsync