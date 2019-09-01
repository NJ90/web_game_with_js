var 숫자1 = Math.ceil(Math.random() * 9); //ceil : 올림 / floor: 내림 //변수 초기화
var 숫자2 = Math.ceil(Math.random() * 9); //변수 초기화
var 결과 = 숫자1 * 숫자2;

var 바디 = document.body;//body를 만듦
var 단어 = document.createElement('div');//div를 만듦
단어.textContent = String(숫자1) + '곱하기' + String(숫자2) + '는?'; //단어 div안에 '숫자1 곱하기 숫자2 는?' 이라는 문장을 넣어줌
document.body.append(단어);//body에 위에 생성한 질문을 붙여넣음

var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);
입력창.type = 'number' //input type = "number"와 같은 의미
var 버튼 = document.createElement('button');
버튼.textContent = '입력';
폼.append(버튼);
var 결과창 = document.createElement('div');
document.body.append(결과창);

폼.addEventListener('submit', function(e){//콜백함수
    
    e.preventDefault();
    if (결과 === Number(입력창.value)) {//input type을 number로 했지만, 결과적으로 텍스트로 인식함. 그래서 Number로 감싸주었다.
        결과창.textContent = '딩동댕';
        숫자1 = Math.ceil(Math.random() * 9);  //전역 변수 의미를 바꿔줌
        숫자2 = Math.ceil(Math.random() * 9);  //여기도 마찬가지, 변수 바꿔줌
        결과 = 숫자1 * 숫자2;
        단어.textContent = 숫자1 + '곱하기' + 숫자2 + '는?'; //질문 다시! 
        
        입력창.value = '';
        입력창.focus();
    } else {
        결과창.textContent = '땡';
        입력창.value = '';
        입력창.focus();
    }
});
