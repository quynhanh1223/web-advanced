//light-dark bulb
const body = document.body;
const switch_mode = document.querySelector('#switch-mode');
let mode = localStorage.getItem('darkmode');
console.log(mode);
if(mode == 'true') {
    body.classList.add('dark');
}
switch_mode.addEventListener('click', () =>{
    let mode = body.classList.toggle('dark');
    // save mode
    localStorage.setItem('darkmode', mode);
});

// list menu - 3 rows
const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = () => {
    dropDownMenu.classList.toggle('open')
}

// hide to the top
const toTheTop = document.querySelector('#scroll-top');
window.addEventListener('scroll', (checkHeight) => {
    if(window.scrollY > 700) {
        toTheTop.style.display = "flex"
    } else {
        toTheTop.style.display = "none"
    }
});

// click move to the top
toTheTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

// open-hide form login
const showLogin = document.querySelector('#login-btn');
const hideLogin = document.querySelector('#hide .form-close');

showLogin.addEventListener('click', () => {
    document.body.classList.toggle('show-login-btn')
});
hideLogin.addEventListener('click', () => showLogin.click());