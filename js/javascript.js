
document.querySelector('.menu__btn').addEventListener('click',()=>{
    const header = document.querySelector('.header')
    const headerNav = document.querySelector('.header__nav')
    /*if(header.classList.contains('header--desplegado')){
    header.classList.remove('header--desplegado')
} else {
    header.classList.add ('header--desplegado')*/

    header.classList.toggle('header--desplegado');
    headerNav.classList.toggle('header__nav--opacity')
})

// document.querySelector('.menu__btn').addEventListener('click',()=>{
//     const header = document.querySelector('.header')
//     const headerNav = document.querySelector('.header__nav')
//     header.classList.toggle('header--desplegado');
//     headerNav.classList.toggle('header__nav--opacity')
// })