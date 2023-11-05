import { addToggleClassOnClick } from "./addToggleClassOnClick.js";

export const load = () => {
  document.addEventListener("DOMContentLoaded", function () {

    // 사이드바 메뉴 토글
    const sidebartoggle = document.getElementById("sidebarToggle");
    const sidebarmenu = document.getElementById("sidebarMenu");
    addToggleClassOnClick(sidebartoggle, sidebarmenu, "close")


    // input form 데이터값 처리하기
    document.getElementById('questionData').addEventListener('submit', async (e) => {
      // e.preventDefault()를 사용하여 기본 제출 동작을 중지하고, 입력된 데이터를 변수 searchContent에 저장합니다.
      e.preventDefault();
      const questionContent = document.getElementById('questionContent').value;
  
      // 서버로 데이터를 보내는 POST 요청
      // fetch를 사용하여 "/submit" 경로로 POST 요청을 보내고, 요청 본문에 JSON 형식으로 { data: questionContent }를 전달합니다.
      const response = await fetch('/submit', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: questionContent }),
      });
  
      if (response.ok) {
          // 서버에서 반환한 JSON 데이터를 처리
          // 서버로부터의 응답을 처리하기 위해 await를 사용하여 응답을 대기합니다.
          const responseData = await response.json();
          console.log(responseData.message, responseData.answerData);
      } else {
          console.error('요청 실패');
      }
  });


    })
  }

