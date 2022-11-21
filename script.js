let stars = document.getElementById('stars');
let moon = document.getElementById('moon');

let text = document.getElementById('text');
let btn = document.getElementById('btn')

let mountains = document.getElementById('mountains');
let road = document.getElementById('road');
let car = document.getElementById('car')

let header = document.querySelector('header');
let sticky = header.offsetTop;

function stickyHeader(){
    if (window.pageYOffset > sticky){
        header.classList.add("sticky");
    } else{
        header.classList.remove("sticky");
    }
}

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.top = value * 0.25 + 'px';
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1 + 'px';
    moon.style.left = value * 1 + 'px';
    //text.style.marginLeft = value * 0.5 +'px';
    //btn.style.marginLeft = value * 0.5 +'px';
    mountains.style.top = -value * 0.02  + 'px';
    car.style.top = -value * 0.1 + 'px';
    car.style.left = value * 0.25 + 'px';
    stickyHeader();
})

