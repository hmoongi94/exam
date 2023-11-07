const express = require('express');
const router = express.Router();
const fs = require('fs');
const { userInfo } = require('os');
const path = require('path');

//get 요청으로 메인페이지에 basicdata읽고 데이터값 쏴주기
    // app.get()
    // let basicData={}
    // try{
    //   const basicDataPath = path.join(__dirname, './public/data/basicData.json');
    //   const basicFileData = fs.readFileSync(basicDataPath,'utf-8')
    //   basicData = JSON.parse(basicFileData)
    //   console.log(basicData)

    // } catch(error){
    //   console.error(error)
    // }

    // router.get('/',(req,res)=>{
    //   const htmlFilePath = path.join(__dirname, './public/index.html')
    //   res.sendFile(htmlFilePath)
    // })

    router.post('/submit', (req, res) => {
      const newData = req.body.data; // 클라이언트에서 보낸 데이터
      const timestamp = new Date().toLocaleTimeString(); //시간보여주는 timestamp 생성
    
      // 기존 JSON 파일에서 데이터 읽기
      try {
        const questionDataPath = path.join(__dirname, '../data/questionData.json')
        // questionData.json을 읽고 변수 jsonData에 questionData.json 데이터를 객체로 파싱한 후에 넣어준다.
          fs.readFileSync(questionDataPath, (err,data)=>{
            if(err){
              console.log("error reading questionData.json")
              res.status(500).send("Internal Server Error")
            } else{
              let questionData = JSON.parse(data)
              
              // 새 데이터를 questiondata에 넣기
              questionData.mainContent.inputRecords.push({
                type:"user",
                message: newData,
                timestamp: timestamp
              })
              
              console.log(questionData)
              fs.writeFileSync(questionDataPath, JSON.stringify(questionData,null,2), (err)=>{
                if(err){
                  console.error("error writing question.json",err);
                  res.status(500).send("Internal Server Error")
                } else{
                  console.log("questiondata.json에 저장이 되었습니다.")
                }
              })

              // newdata가 들어간 questiondata를 questiondata.json에 갱신해주기 
            }
          })
          
      } catch (error) {
          console.error(error);
      }
    
    
      // 다른 JSON 파일에서 데이터 읽기
      let responseData = {};
      let responseMessage = ""
      try {
          const answerDataPath = path.join(__dirname, '../data/answerData.json')
          const answerFileData = fs.readFileSync(answerDataPath, 'utf8');
          responseData = JSON.parse(answerFileData);
          // 응답에 조건걸어줘보기
         if(typeof(newData)==="1234"){
          responseMessage = responseData.yes
         } else if(newData === "123"){
          responseMessage = responseData.no
         } else{
          responseMessage = responseData.yes
         }
          
      } catch (error) {
          console.error("answerData.json을 읽지 못하였습니다.",error);
      }
    
      let styleData={}
      try{
        const styleDataPath = path.join(__dirname, '../data/styleData.json');
        const styleFileData = fs.readFileSync(styleDataPath,'utf-8')
        styleData = JSON.parse(styleFileData)
        // console.log(styleData)
    
      } catch(error){
        console.error("styleData를 읽지 못하였습니다.",error)
      }
    
      // 클라이언트에 응답
    //   console.log(typeof(newData))
      res.json({ inputData: `질문 내용: ${newData}`, 
                responseData: `답변 내용: ${responseMessage}`,
                styleData
    })
    });

    module.exports = {
      // handleGetRequest: router.get('/'),
      handlePostRequest: router.post('/submit')
    }