const sleep = document.querySelector('#sleep'),
when = document.querySelector('#whenSleep'),
go = document.querySelector('#go');

sleep.addEventListener('click', (e) => {
    e.preventDefault();
    when.classList.add('active');
});

go.addEventListener('click', (e) => {
    e.preventDefault();
    when.classList.remove('active');
});