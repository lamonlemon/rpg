var chop = 2500;
document.getElementById('incrementBtn').addEventListener('click', function() {
    // AJAX를 이용하여 서버로 데이터 전송
    fetch('', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
        // 서버에서 받은 데이터로 화면 업데이트
        document.getElementById('wood').textContent = data.wood;
    })
    .catch(error => console.error('Error:', error));
    document.getElementById('incrementBtn').disabled = true;
    setTimeout(function() {
        document.getElementById('incrementBtn').disabled = false;
    }, chop);
});