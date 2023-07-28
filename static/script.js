var chop = 100;
const drop = document.querySelector("#drop");
drop.disabled = true;
document.getElementById('incrementBtn').addEventListener('click', function() {
    // AJAX를 이용하여 서버로 데이터 전송
    fetch('', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
        // 서버에서 받은 데이터로 화면 업데이트
        document.getElementById('wood').textContent = data.wood;
        if(data.wood >= 10){
            drop.disabled = false;
        }else {
            drop.disabled = true;
        }
    })
    .catch(error => console.error('Error:', error));
    document.getElementById('incrementBtn').disabled = true;
    setTimeout(function() {
        document.getElementById('incrementBtn').disabled = false;
    }, chop);
});
document.getElementById('drop').addEventListener('click', function() {
    // AJAX를 이용하여 서버로 데이터 전송
    fetch('/make_house', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
        // 서버에서 받은 데이터로 화면 업데이트
        document.getElementById('wood').textContent = data.wood;
        document.getElementById('need').textContent = data.need;
        if(data.wood >= data.need){
            drop.disabled = false;
        }else {
            drop.disabled = true;
        }
    })
    .catch(error => console.error('Error:', error));
});
document.getElementById('saveBtn').addEventListener('click', function() {
    var data = prompt('저장할 데이터를 입력하세요:');
    if (data !== null) {
        // AJAX를 이용하여 서버로 데이터 전송
        fetch('/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'data=' + encodeURIComponent(data),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => console.error('Error:', error));
    }
});

document.getElementById('loadBtn').addEventListener('click', function() {
    // AJAX를 이용하여 서버로 데이터 요청
    fetch('/load')
    .then(response => response.json())
    .then(data => {
        // 서버에서 받은 데이터로 화면 업데이트
        document.getElementById('dataContainer').textContent = '불러온 데이터: ' + data.data;
    })
    .catch(error => console.error('Error:', error));
});
