const navCloser = document.getElementById('nav-closer');
const openerBtn = document.getElementById('opener-btn');

function moveNav(){
    document.querySelector('.nav').classList.toggle('move')
}

openerBtn.addEventListener('click',moveNav)
navCloser.addEventListener('click',moveNav)
