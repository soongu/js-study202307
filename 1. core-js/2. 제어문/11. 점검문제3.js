// 랜덤 정수 2개를 생성

let qNum = 1; // 문제 넘버링

while (true) {
  let firstNumber = Math.floor(Math.random() * 20) + 1;
  let secondNumber = Math.floor(Math.random() * 20) + 1;
  
  let userAnswer = +prompt(`Q${qNum++}. ${firstNumber} + ${secondNumber} = ??`);

  if (userAnswer === 0) {
    alert('게임을 종료합니다!');
    break;
  }

  // 정답 확인
  if (userAnswer === firstNumber + secondNumber) {
    alert("정답입니다!");
  } else {
    alert("틀렸습니다!");
  }
}
