function handleDataSave() {
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
}

function handleDataLoad() {
    // AJAX를 이용하여 서버로 데이터 요청
    fetch('/load')
    .then(response => response.json())
    .then(data => {
        // 서버에서 받은 데이터로 화면 업데이트
        document.getElementById('dataContainer').textContent = '불러온 데이터: ' + data.data;
    })
    .catch(error => console.error('Error:', error));
}
