var chop = 0;
document.getElementById('decrementBtn').disabled = true;
// document.getElementById('build').textContent = 10;

function modifyWood(action) {
    // AJAX를 이용하여 서버로 데이터 전송
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'action=' + action,
    })
    .then(response => response.json())
    .then(data => {
        // 서버에서 받은 데이터로 화면 업데이트
        document.getElementById('wood').textContent = data.wood;
        
        document.getElementById('build').textContent = data.need;
        // 나무 개수가 10개 이상인 경우 빼기 버튼 활성화, 아닌 경우 비활성화
        if(data.need < 100){
            document.getElementById('decrementBtn').disabled = data.wood < data.need;
        }else{
            document.getElementById('decrementBtn').disabled = true;
        }
        // 로컬 스토리지에 나무 개수 저장
        localStorage.setItem('wood', data.wood);
        localStorage.setItem('need', data.need);
    })
    .catch(error => console.error('Error:', error));

    document.getElementById('incrementBtn').disabled = true;
    setTimeout(function() {
        document.getElementById('incrementBtn').disabled = false;
    }, chop);
}

// 페이지 로드 시 로컬 스토리지에 저장된 데이터 로드
window.addEventListener('load', function() {
    // localStorage.setItem('wood', 0);
    // localStorage.setItem('need', 10);
    var storedWood = localStorage.getItem('wood');
    var storedNeed = localStorage.getItem('need');
    if (storedWood !== null) {
        document.getElementById('wood').textContent = storedWood;
    }
    if (storedNeed !== null){
        if(storedNeed === 'Max'){
            document.getElementById('decrementBtn').disabled = true;
        }
        document.getElementById('build').textContent = storedNeed;
    }
});
