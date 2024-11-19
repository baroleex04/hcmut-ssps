let profile = document.querySelector('.header .flex .profile')
let body = document.body;
document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active')
}
let sidebar = document.querySelector('.side-bar')

document.querySelector('#menu-btn').onclick = () => {
    sidebar.classList.toggle('active')
    body.classList.toggle('active')
}
document.querySelector('#close-btn').onclick = () => {
    sidebar.classList.remove('active')
    body.classList.remove('active')
}
window.onscroll = () => {
    profile.classList.remove('active')
}