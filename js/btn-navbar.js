const btn_navbar = document.getElementsByClassName('btn-vnlljs-navbar')[0];
const btn_navbar_target = document.getElementsByClassName('navbar-btn-target-vnlljs')[0];

btn_navbar.addEventListener ('click', (btn => {

    console.log(btn)
    btn_navbar_target.classList.toggle('show-navbar-vnlljs');
    console.log(btn_navbar_target)
}));