function limittime(num) { 
  let setting = setInterval(function() {
  // 초당 1씩 감소
  num--;
  // 감소된 시간을 입력
  timehow.textContent = num +'초';
  // 0보다 작거나 같을 때 조건식
  if( num <= 0 ) {
    timehow.textContent = '종료!';
    // interval함수 종료
    clearInterval(setting);
  };
  // 1초당 반복하여 texContent에 넣어줌
}, 1000);
}

// console.log(limittime(20));
module.exports = limittime();