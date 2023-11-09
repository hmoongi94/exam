

  // 다른 JSON 파일에서 데이터 읽기
  let responseData = {};
  let responseMessage = ""
  try {
    const answerFileData = fs.readFileSync(answerDataPath, 'utf8');
    responseData = JSON.parse(answerFileData);
    // 응답에 조건걸어줘보기
    if (newData === "1234") {
      responseMessage = responseData.no
      responseData.mainContent.inputRecords.push({
        type: "assistant",
        message: responseMessage,
        timestamp: timestamp
      })
      fs.writeFile(answerDataPath, JSON.stringify(responseData, null, 2), (err) => {
        if (err) {
          console.error("error writing question.json", err);
          res.status(500).send("Internal Server Error")
        } else {
          // console.log(answerData)
          console.log("answerData.json에 저장이 되었습니다.")
        }
      })
    } else {
      responseMessage = responseData.yes
      responseData.mainContent.inputRecords.push({
        type: "assistant",
        message: responseMessage,
        timestamp: timestamp
      })
      fs.writeFile(answerDataPath, JSON.stringify(responseData, null, 2), (err) => {
        if (err) {
          console.error("error writing question.json", err);
          res.status(500).send("Internal Server Error")
        } else {
          // console.log(questionData)
          console.log("answerData.json에 저장이 되었습니다.")
        }
      })
    }

  } catch (error) {
    console.error("answerData.json을 읽지 못하였습니다.", error);
  }

  let styleData = {}
  try {
    const styleFileData = fs.readFileSync(styleDataPath, 'utf-8')
    styleData = JSON.parse(styleFileData)
    // console.log(styleData)

  } catch (error) {
    console.error("styleData를 읽지 못하였습니다.", error)
  }
  // console.log(responseData)
  // console.log(responseMessage)
  // console.log(questionData)
  // console.log(styleData)
  // 클라이언트에 응답