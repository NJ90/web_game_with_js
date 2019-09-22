var table = document.getElementById('table');
var data = [];

function init() {
    var fragment = document.createDocumentFragment();
    [1, 2, 3, 4].forEach(function () {
        var colData = [];
        data.push(colData);
        var tr = document.createElement('tr');
        [1, 2, 3, 4].forEach(function () {
            colData.push(0);
            var td = document.createElement('td');
            tr.appendChild(td);
        });
        fragment.appendChild(tr);
    });
    table.appendChild(fragment);
}


//랜덤생성
function randomform() {
    var blackCol = [];
    data.forEach(function (colData, i) {
        colData.forEach(function (rowData, j) {
            if (!rowData) {
                blackCol.push([i, j]);
            }
        });
    });
    if (blackCol.length === 0) {
        alert('Game Over:' + scoreTable.textContent);
        table.innerHTML = '';
        init();
    } else {
        //console.log(blackCol);
        var randomCol = blackCol[Math.floor(Math.random() * blackCol.length)];
        data[randomCol[0]][randomCol[1]] = 2;
        draw();
    }
}

//그리기
function draw() {
    data.forEach(function (colData, i) {
        colData.forEach(function (rowData, j) {
            if (rowData > 0) {
                table.children[i].children[j].textContent = rowData; //2차원 배열로 관리하는 데이터를 화면에 출력
            } else {
                table.children[i].children[j].textContent = ''; //0보다 작을 경우 빈칸
            }
        });
    });
}

init();
randomform();
draw();


//드래그 기능 만들기 / 드래그 할 때 방향 읽을 수 있도록
//마우스 움직일 때 방향 mousedown, mousemove, moseup
//event screenX:모니터기준좌표 pageX:페이지(스크롤포함) clientX:브라우저화면기준 offsetX:이벤트 타겟 기준

var dragStart = false;
var dragIng = false;
var start;
var end;

window.addEventListener('mousedown', function (e) {
    //console.log('mousedown', e);
    dragStart = true;
    start = [e.clientX, e.clientY];
});

window.addEventListener('mousemove', function (e) {
    if (dragStart) {
        //console.log('mousemove', e);
        dragIng = true;
    }
});

window.addEventListener('mouseup', function (e) {
    //console.log('mouseup', e);
    end = [e.clientX, e.clientY];

    if (dragIng) {
        var direction;
        var x_gap = end[0] - start[0];
        var y_gap = end[1] - start[1];

        if (x_gap < 0 && Math.abs(x_gap) / Math.abs(y_gap) > 1) {
            direction = 'left';
        } else if (x_gap > 0 && Math.abs(x_gap) / Math.abs(y_gap) > 1) {
            direction = 'right'
        } else if (y_gap > 0 && Math.abs(x_gap) / Math.abs(y_gap) < 1) {
            direction = 'down'
        } else if (y_gap < 0 && Math.abs(x_gap) / Math.abs(y_gap) < 1) {
            direction = 'up'
        }
        console.log(x_gap, y_gap, direction)
    }
    dragStart = false;
    dragIng = false;

    //드래그에 따라 데이터 옮겨주기
    switch (direction) {
        case 'left':
            var newData = [
                [],
                [],
                [],
                []
            ];
            data.forEach(function (colData, i) {
                colData.forEach(function (rowData, j) {
                    if (rowData) {
                        //데이터 합쳐주기 전 데이터와 지금 데이터가 같으면 합쳐준다.
                        if (newData[i][newData[i].length - 1] && newData[i][newData[i].length - 1] === rowData) {
                            newData[i][newData[i].length - 1] *= 2;
                            //점수표
                            var score = parseInt(scoreTable.textContent, 10);
                            scoreTable.textContent = score + newData[i][newData[i].length - 1];
                        } else {
                            newData[i].push(rowData);
                        }
                    }
                });
            });
            console.log(newData);
            [1, 2, 3, 4].forEach(function (colData, i) {
                [1, 2, 3, 4].forEach(function (rowData, j) {
                    data[i][j] = newData[i][j] || 0;
                });
            });
            break;
        case 'right':
            var newData = [
                [],
                [],
                [],
                []
            ];
            data.forEach(function (colData, i) {
                colData.forEach(function (rowData, j) {
                    if (rowData) {
                        if (newData[i][0] && newData[i][0] === rowData) {
                            newData[i][0] *= 2;
                            var score = parseInt(scoreTable.textContent, 10);
                            scoreTable.textContent = score + newData[i][0];
                        } else {
                            newData[i].unshift(rowData);
                        }
                    }
                });
            });
            console.log(newData);
            [1, 2, 3, 4].forEach(function (colData, i) {
                [1, 2, 3, 4].forEach(function (rowData, j) {
                    data[i][3 - j] = newData[i][j] || 0;
                });
            });
            break;
        case 'up':
            var newData = [
                [],
                [],
                [],
                []
            ];
            data.forEach(function (colData, i) {
                colData.forEach(function (rowData, j) {
                    if (rowData) {
                        newData[j].push(rowData);
                    }
                });
            });
            console.log(newData);
            [1, 2, 3, 4].forEach(function (rowData, i) {
                [1, 2, 3, 4].forEach(function (colData, j) {
                    data[j][i] = newData[i][j] || 0;
                });
            });
            break;
        case 'down':
            var newData = [
                [],
                [],
                [],
                []
            ];
            data.forEach(function (colData, i) {
                colData.forEach(function (rowData, j) {
                    if (rowData) {
                        newData[j].unshift(rowData);
                    }
                });
            });
            console.log(newData);
            [1, 2, 3, 4].forEach(function (rowData, i) {
                [1, 2, 3, 4].forEach(function (colData, j) {
                    data[3 - j][i] = newData[i][j] || 0;
                });
            });
            break;
    }
    draw();
    randomform();
});

