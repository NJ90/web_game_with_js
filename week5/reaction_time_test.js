var screen = document.querySelector('#screen');//ID로 선택
var start;
var end; // 호출스택(call stack), 변수를 전역에 한번 더 선언해줘야 값이 저장되어 있어 function이 사라져도 계속해서 사용할 수 있다.
var write = [];
var timeout;
//console.time('time1') //현재시간 기록하는 방법 2
//var start = performance.now();//현재시간 기록하는 방법 3, new Date()와의 차이는 performance.now()는 좀 더 정밀한 시간까지 측정함


screen.addEventListener('click', function(){

    //var end = new Date();//비동기=언제 시작될지 모르기 때문에, end 시간은 비동기 시작된 시간에 측정해주기 위해서, 지역변수로 처리(scope)
    //console.log((end - start)/1000);

    //console.timeEnd('time1')//페이지가 로딩된 후 클릭하는것 까지 걸린 시간 측정 버그 해결할 때 주로 사용한다. 

   //var end = performance.now();
   //console.log(end - start/1000)



   if (screen.classList.contains('waiting')) {
    screen.classList.remove('waiting');
    screen.classList.add('ready');
    screen.textContent = '초록색이 되면 클릭하세요';
    timeout = setTimeout(function(){
        //console.log('timeout!')
        start = new Date();//전역변수 재선언
        screen.click();
    }, Math.floor(Math.random() * 1000) + 2000);//2000~3000 사이 수
   } else if (screen.classList.contains('ready')){//준비상태
    if (!start){//준비상태일 때 클릭하는 상황 처리 (부정클릭)
        clearTimeout(timeout);//부정클릭일 때 초 세는거 취소
        screen.classList.remove('ready');
        screen.classList.add('waiting');
        screen.textContent = '클릭해서 시작하세요';    
    } else {
    screen.classList.remove('ready');
    screen.classList.add('now');
    screen.textContent = '클릭하세요!';
    }
   } else if (screen.classList.contains('now')){//시작상태
    var end = new Date();
    console.log('반응속도', end - start, 'ms');//start 변수 찾을 수 없는 상태이기 때문에 start변수는 전역변수로 선언해준다.
    write.push(end - start);
    start = null; //다음게임을 위해서 값을 초기화
    end = null; //다음게임을 위해서 값을 초기화
    screen.classList.remove('now');
    screen.classList.add('waiting');
    screen.textContent = '클릭해서 시작하세요';
   }
});
