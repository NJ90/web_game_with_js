// var 후보군 = Array(45)
// var 맵 = 후보군.fill();

// 필.array.forEach(function(요소, 인덱스) {
//     필[인덱스] = 인덱스 +1;    
// });

// console.log(필)

//forEach를 이용해 아래와 같이 요소별 인덱스 값을 불러옴. 
//[undefined, undefined, undefined];
//[1, 2, 3]  
//하지만 조금 억지스러운 방법이기 때문에, 
//map을 사용한 코드로 다시!
//map을 사용하면 변수도 간단하게 줄일 수 있기 때문에 변수도 다시 선언한다.



var 후보군 = Array(45)
            .fill() //특정 값을 특정 배열에 채워줌
            .map(function(요소, 인덱스) {
            return 인덱스 + 1;    
            });

console.log(후보군)
//여기까지 맵을 이용해서 1~45까지의 숫자 값을 가져옴


//*fill설명
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.fill("Kiwi");
//이렇게 하면 Kiwi,Kiwi,Kiwi,Kiwi가 반환된다


var 셔플 = [];
while (후보군.length > 0){ 
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
    //splice = random한 숫자 중에서 하나를 뽑음
    셔플.push(이동값);
}
console.log(셔플);

var 보너스 = 셔플[셔플.length - 1]; //마지막 숫자
var 당첨숫자들 = 셔플.slice(0, 6)//셔플을 0번째 자리부터 6째 자리까지 자름 = 0 ~ 5
                .sort(function(p, c) { //sort()를 이용해서 작은숫자~큰숫자로 배열 값 정렬
                    return p - c; //p = 이전숫자, c=현재숫자
                })
console.log('당첨숫자들', 당첨숫자들, '보너스', 보너스);

//for문은 정확하게 몇번 반복문이 돌아야 할지 알때
//while문은 반복문이 몇번 반복되야 하는지 모를때 , 기준값이 계속 바뀔때



//html요소들을 javascript로 가져옴
var 결과창 = document.getElementById('결과창');

function 공색칠하기(숫자, 결과창){
    var 공 = document.createElement('div');
    공.textContent = 숫자;
    공.style.display = 'inline-block';
    공.style.borderRadius = '50%';
    공.style.width = '40px';
    공.style.height = '40px';
    공.style.textAlign = 'center';
    공.style.lineHeight = '40px';
    공.style.marginRight = '15px';
    공.style.color = '#fff';
    
    var 배경색;
    if (숫자 <= 10) {
        배경색 = 'red'
    } else if (숫자  <= 20) {
        배경색 = 'orange';
    } else if (숫자 <= 30) {
        배경색 = 'yellow';
    } else if (숫자 <= 40) {
        배경색 = 'blue';
    } else if (숫자 <= 40) {
        배경색 = 'green';
    }
    공.style.backgroundColor = 배경색;

    var 보더;
    if (숫자 <= 10) {
        보더 = '1px solid red'
    } else if (숫자  <= 20) {
        보더 = '1px solid orange';
    } else if (숫자 <= 30) {
        보더 = '1px solid yellow';
    } else if (숫자 <= 40) {
        보더 = '1px solid blue';
    } else if (숫자 <= 40) {
        보더 = '1px solid green';
    }
    공.style.border = 보더;

    결과창.appendChild(공);
}//겹치는 부분은 함수로

setTimeout(function 비동기콜백함수(){//다른부분은 매개변수로
    공색칠하기(당첨숫자들[0], 결과창);
},1000);
setTimeout(function 비동기콜백함수(){
    공색칠하기(당첨숫자들[1], 결과창);
},2000);
setTimeout(function 비동기콜백함수(){
    공색칠하기(당첨숫자들[2], 결과창);
},3000);
setTimeout(function 비동기콜백함수(){
    공색칠하기(당첨숫자들[3], 결과창);
},4000);
setTimeout(function 비동기콜백함수(){
    공색칠하기(당첨숫자들[4], 결과창);
},5000);
setTimeout(function 비동기콜백함수(){
    공색칠하기(당첨숫자들[5], 결과창);
},6000);


// for (var i = 0; i < 당첨숫자들.length; i += 1){
//     var 공 = document.createElement('div');
//     공.textContent = 당첨숫자들[i];
//     결과창.appendChild(공)
// }

//보너스 숫자 부분
// var 보너스칸 = document.getElementsByClassName('보너스')[0];
//클래스는 여러번 쓸 수 있기 때문에, 배열의 첫번째만 가져올 수 있도록 '[0]'

// var 보너스공 = document.createElement('div');
// 보너스공.textContent = 보너스;
// 보너스칸.appendChild(보너스공);


setTimeout(function 비동기콜백함수(){
    var 보너스칸 = document.getElementsByClassName('보너스')[0];
    var 보너스공 = document.createElement('div');
    보너스공.textContent = 보너스;
    보너스칸.appendChild(보너스공);
    보너스공.style.display = 'inline-block';
    보너스공.style.border = '1px solid red';
    보너스공.style.borderRadius = '50%';
    보너스공.style.width = '40px';
    보너스공.style.height = '40px';
    보너스공.style.textAlign = 'center';
    보너스공.style.lineHeight = '40px';
    보너스공.style.color = '#fff';
    보너스공.style.backgroundColor = 'red';
}, 7000)



//*추가* 편하게 사용할 수 있는 선택자(querySelector)
document.querySelector('#아이디값 또는 .클래스값')
