function cookQuestionDataFunc(parsedData, writefileFunc) {
  // *여기서 마음대로 조리
  parsedData.mainContent.inputRecords = {
    "type": "user",
    "message": `${newData}`,
    "timestamp": `${timestamp}`
  }

  // *writefile할 콜백함수
  writefileFunc()

}

function cookAnswerDataFunc(parsedData, writefileFunc) {
  if (newData === "1234") {
    responseMessage = parsedData.no
    parsedData.mainContent.inputRecords.push({
      'type': 'assistant',
      'message': `${responseMessage}`,
      "timestamp": `${timestamp}`
    })
  } else {
    responseMessage = parsedData.yes
    parsedData.mainContent.inputRecords.push({
      'type': 'assistant',
      'message': `${responseMessage}`,
      "timestamp": `${timestamp}`
    })
  }

  writefileFunc()
}

function returnData(data){
  return data
}

module.exports = {cookQuestionDataFunc, cookAnswerDataFunc, returnData}