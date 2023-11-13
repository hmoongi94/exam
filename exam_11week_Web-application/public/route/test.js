// const fs = require('fs')
// const path = require('path')

// function readFileAndParseASync(fileName, datapath, data, cookDataFunc){
//   datapath = path.join(__dirname, `../data/${fileName}`)
//   fs.readFile(datapath,'utf8',(err,filedata)=>{
//     if(err){
//       throw new Error(`${fileName}을 읽지 못하였습니다.`)
//     } else{
//       try {
//         data = JSON.parse(filedata);
//         // console.log(data)
//         // console.log(datapath)
//         // * parsingdata를 fs.writefile을 할 콜백함수
//         cookDataFunc(data)

//       } catch (parseError) {
//         throw new Error(`데이터 파싱 오류: ${parseError.message}`);
//       }
//     }
//   })

// }

// let datapath = ''   
// let data = {}

// // 예시 콜백 함수
// function cookDataFunc(data) {
//   // 받아온 데이터를 이용한 작업 수행
//   console.log(data);
// }
// readFileAndParseASync('questionData.json', datapath, data, function(data){
//   cookDataFunc(data)
// })

let styleData ={}

const returnData = function (cookedData, responseData) {
  
  //returnData 함수 내에서 responseData에 cookedData를 할당하고 반환하고 있습니다. 그러나 styleData를 함수에 인자로 전달할 때는 객체의 참조(reference)가 전달되어 변경이 가능하도록 전달됩니다. 그런데 함수 내에서 responseData에 새로운 값을 할당하면서 객체의 참조가 새로운 객체로 변경되고, 이는 styleData에는 영향을 주지 않습니다.
  // responseData = cookedData
  // console.log(responseData)

  Object.assign(responseData,cookedData)
  return responseData
}

const parsedData ={
  "colors": {
    "primary": "#FF5733",
    "secondary": "#33FF57",
    "background": "#F5F5F5",
    "text": "#333333"
  },
  "fonts": {
    "main": "Arial, sans-serif",
    "alternate": "Georgia, serif"
  },
  "icons": {
    "logo": "🌐",
    "userAvatar": "👤"
  }
}

console.log(returnData(parsedData, styleData))