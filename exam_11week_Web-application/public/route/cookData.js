const cookQuestionDataFunc = function(parsedData, writefileFunc) {
  // *여기서 마음대로 조리
  const timestamp = new Date().toLocaleTimeString(); //시간보여주는 timestamp 
  parsedData.mainContent.inputRecords = {
    "type": "user",
    "message": `${newData}`,
    "timestamp": `${timestamp}`
  }

  // *writefile할 콜백함수
  writefileFunc()

}

const cookAnswerDataFunc = function(parsedData, writefileFunc) {
  const timestamp = new Date().toLocaleTimeString(); //시간보여주는 timestamp 
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

  writefileFunc(responseMessage)
}

const returnData = function(cookedData, responseData){
  // responseData = cookedData
  Object.assign(responseData,cookedData)
  return responseData
}

module.exports = {cookQuestionDataFunc, cookAnswerDataFunc, returnData}