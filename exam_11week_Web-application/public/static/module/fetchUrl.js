// JSON 데이터를 가져오는 함수
export async function jsonData(url) {
  try {
    const response = await fetch(url);
    //* fetch로 요청, 응답은 이미 끝남.
    if (!response.ok) {
      throw new Error(`Network response was not ok (Status: ${response.status})`);
    }
    const data = await response.json()
    //? 햇갈렸던 부분: 응답을 받는데 시간이 걸리기 때문에 await을 쓰는것은 알았지만 데이터를 파싱하는 작업도 await을 하는게 의문이였음.
    //* .json()데이터를 파싱하는 이 함수도 비동기 함수이고 시간이 다소 걸려서 await을 사용
    return data
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}