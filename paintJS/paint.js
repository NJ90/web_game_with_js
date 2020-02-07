



//A. 마우스 오버 했을 때 좌표 -> 마우스 클릭했을 때 좌표를 구함
//B. 마우스 다운했을 때에만 painting이 되도록 function 
    //function을 만들고 mousedown에서만 true, 나머지는 false
//C. Canvas의 context 작성
//D. color 변경  click event 작성
    //color를 가져올 변수
    //가져온 this.color를 클릭할 때 strokeStyle에 set
//E. lineWidth 를 컨트롤
    //



    var canvas = document.getElementById('jsCanvas');
    var drawing = false;
    var ctx = canvas.getContext('2d');
    var colorSpot = document.getElementsByClassName('jsColor');
    var strokWidth = document.getElementById('jsRange');
 

    canvas.width = 700; //canvas의 real width & height 꼭 필요함
    canvas.height = 700;

    ctx.strokeStyle = "#2c2c2c"; //strok의 색
    ctx.lineWidth = 2.5;//stroke의 두깨



// function onMouseMove(event){//mousedown = click후 손을 떼지 않은 상태의 마우스 움직임 정보를 console에 나타냄
//        console.log(event);
// }

function whereIsMouse(event){ //3. offsetX, offseetY value만 골라냄
    var x = event.offsetX;
    var y = event.offsetY;
    //console.log(x, y)

    if(!drawing){//7. canvas에 context를 작성해주었으니, 실제 drawing function을 작성
        console.log('creating PATH', x, y);
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        console.log('creating LINE', x, y);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event){//5. mousedown 했을 때 painting function에 true;
    drawing  = true;
}
       
// function onMouseUp(event){//6. mouse클릭을 멈췄을 때 painting function에 false;
//     drawing = false; 
// }

function startDrawing(event){
    drawing = true;
}

function stopDrawing(event){
    drawing = false;
}


if (canvas){
    //2. 마우스 올렸을 때 value들을 구한 뒤     
 canvas.addEventListener('mousemove', whereIsMouse);
    //4. 클릭한 곳의 offsetX, offseetY value만 골라냄
 canvas.addEventListener('mousedown', startDrawing );//mousedown = click후 손을 떼지 않은 상태;
 canvas.addEventListener('mouseup', stopDrawing);//6. mouse클릭을 멈췄을 때 painting function에 false;
 canvas.addEventListener('mouseleave', stopDrawing);
}


//브러쉬 컬러
console.log(Array.from(colorSpot)); //Array.from = method which makes array from object
Array.from(colorSpot).forEach(colorSpot => colorSpot.addEventListener('click', getColor));

function getColor(event){  
    var color = event.target.style.backgroundColor; //color값을 구했다.
 //    console.log(color);
     ctx.strokeStyle = color;  
}


//브러쉬 넓이
console.log(strokWidth.value);

if(strokWidth){
    strokWidth.addEventListener('input', changingWidth);
}

function changingWidth(event){
    var strokeWidth = event.target.value;
    console.log(strokeWidth);

    ctx.lineWidth = strokeWidth;
}

