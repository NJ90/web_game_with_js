var 이미지좌표 = 0;
var 가위바위보 = {//딕셔너리 자료구조 = 객체리터럴
    바위: '0',
    가위: '-142px',
    보: '-284px'
};

// var 가위바위보2 = {//딕셔너리 자료구조의 단점, 반대의 경우도 변수를 선언해주어야 한다.
//    '0' : '바위',
//     '-142px' : '가위',
//     '-284px' : '보'
// };

function 컴퓨터의선택(이미지좌표){
    return Object.entries(가위바위보).find(function(y){
        return y[1] === 이미지좌표;
    })[0];
}

// return Object.entries(가위바위보) 
//순서가 보장된 sorted 딕셔너리

// 중첩되는 부분을 변수로 빼준다 (인터벌)
var 인터벌;
function 인터벌메이커(){
    인터벌 = setInterval(function() {
    if (이미지좌표 === 가위바위보.바위) {
        이미지좌표 = 가위바위보.가위;
    } else if (이미지좌표 === 가위바위보.가위) {
        이미지좌표 = 가위바위보.보;
    } else {
        이미지좌표 = 가위바위보.바위;
    }
    document.querySelector('#computer').style.background = 
    'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' + 이미지좌표 + ' 0';
}, 100);
}

인터벌메이커();//함수를 불러줘야 작동한다.


var 점수표 = { //점수부분도 이 변수를 이용해 코드를 줄일 수 있다
    가위 : 1,
    바위 : 0,
    보 : -1
};

//querySelector : 처음에 발견한 한개에만 적용됨
//querySelectorAll : 모든것에 적용되지만, 반복문 사용해야함

document.querySelectorAll('.btn').forEach(function(btn){
    btn.addEventListener('click', function(){
        clearInterval(인터벌);
        setTimeout(function(){
        인터벌메이커();
        }, 1000);

        var 나의선택 = this.textContent;

        if (점수표[나의선택] - 점수표[컴퓨터의선택(이미지좌표)] === 0) {
                console.log('비겼습니다');
            } else if (점수표[나의선택] - 점수표[컴퓨터의선택(이미지좌표)] === -1) {
                console.log('이겼습니다');
            } else { 
                console.log('졌습니다');
            }
    });
});


// 위의 간단해진 코드와 아래의 하드코딩을 비교해보기
//         if (나의선택 === '가위') {
//             if(컴퓨터의선택(이미지좌표) === '가위') {
//                 console.log('비겼습니다');
//             } else if (컴퓨터의선택(이미지좌표) === '바위') {
//                 console.log('졌습니다');
//             } else { 
//                 console.log('이겼습니다');
//             }
//         } else if (나의선택 === '바위'){
//             if(컴퓨터의선택(이미지좌표) === '가위') {
//                 console.log('이겼습니다');
//             } else if (컴퓨터의선택(이미지좌표) === '바위') {
//                 console.log('비겼습니다');
//             } else { 
//                 console.log('졌습니다');
//             }
//         } else if (나의선택 === '보'){
//             if(컴퓨터의선택(이미지좌표) === '가위') {
//                 console.log('졌습니다');
//             } else if (컴퓨터의선택(이미지좌표) === '바위') {
//                 console.log('이겼습니다');
//             } else { 
//                 console.log('비겼습니다');
//             }
//         }
//     });
// });
