function cookDataFunc(parsedData, writefileFunc) {
  // *여기서 마음대로 조리
  parsedData.mainContent.inputRecords = {
    "type": "user",
    "message": `${newData}`,
    "timestamp": `${timestamp}`
  }

  // *writefile할 콜백함수
  writefileFunc()

}

module.exports = cookDataFunc