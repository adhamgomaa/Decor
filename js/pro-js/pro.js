// change lang
let lang = document.querySelectorAll('.top-header .lang');

lang.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('lang-active');
    });
});

// Active nav-bar
let listActive = document.querySelectorAll(".header .nav .list ul li a");

listActive.forEach((ac) => {
    ac.addEventListener('click', function () {
        listActive.forEach(a => a.classList.remove("actives"));
        this.classList.add("actives");
    })
});

// menu bar for screen sm
let menu = document.querySelector('.header .container .nav .menu-btn');
let menuOpen = false;

menu.addEventListener('click', () => {
    if(!menuOpen) {
        menu.classList.add('open');
        menuOpen = true
    } else {
        menu.classList.remove('open');
        menuOpen = false
    }
});

let navMenu = document.querySelector('.header .container .nav .menu-btn');
let navBar = document.querySelector('.header .nav .nav-bar .list');

navMenu.addEventListener('click', () => {
    navBar.classList.toggle('nav-active');
});

document.querySelectorAll('.header .nav .nav-bar .list ul li a').forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuOpen = false;
    navBar.classList.remove('nav-active');
}));

// views

let visitor = document.querySelector('.views .visited');

visitedCount();

function visitedCount() {
    let visit;
    if (!localStorage.getItem('visit')) {
        localStorage.setItem('visit', 1);
    } 
    else {
        visit = +localStorage.getItem('visit');
        let count = visit + 1;
        localStorage.setItem('visit', count);
    }
    visitor.innerHTML = localStorage.getItem('visit');
}

// zoom-in image
let image = document.querySelector('.product .container .pro-image .big-img');

image.addEventListener('mousemove', (e) => {
    let width = image.offsetWidth;
    let height = image.offsetHeight;
    let x = e.offsetX;
    let y = e.offsetY;
    let posX = (x / width * 100);
    let posY = (y / height * 100);

    image.style.backgroundPosition = `${posX}% ${posY}%`;
});

image.addEventListener('mouseleave', () => {
    image.style.backgroundPosition = 'top';
});

// change image

let secImage = document.querySelectorAll('.product .second-image .sec-image');

secImage.forEach((sec) => {
    sec.addEventListener('click', function () {
        secImage.forEach(s => s.classList.remove("sec-active"));
        this.classList.add("sec-active");
        image.style.backgroundImage = `url(${sec.getAttribute('data-url')})`
    })
});

// change color
let color = document.querySelectorAll('.product .pro-content .pro-colors .colors .b-color');

color.forEach((change) => {
    change.addEventListener('click', function () {
        color.forEach(c => c.classList.remove('color-active'));
        this.classList.add("color-active");
    })
});

// Counter Quantity
let increment = document.querySelector('.counter-add');
let discerment = document.querySelector('.counter-remove');
let int = document.querySelector('.product .pro-content .pro-buy .qty .counter .integer');
let integer = 1;

increment.addEventListener('click', () => {
    integer++;
    if (integer > 100) {
        integer = 100
    }
    int.innerHTML = integer;
});

discerment.addEventListener('click', () => {
    integer--;
    if (integer < 1) {
        integer = 1
    }
    int.innerHTML = integer;
});

// favorite btn
let favBtn = document.querySelector('.product .pro-content .pro-buy .buy button');
let fav = document.querySelector('.product .pro-content .pro-buy .buy button .fav');

favBtn.addEventListener('click', () => {
    if (!fav.classList.contains('fav-active')) {
        fav.classList.add('fav-active');
        favBtn.classList.add('btn-active');
    } else {
        fav.classList.remove('fav-active');
        favBtn.classList.remove('btn-active');
    }
});

// accordion
let accordion = document.querySelectorAll('.product .pro-content .accordion .box');

accordion.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('content-active');
    });
});

// other products
let product = document.querySelector(".products .container .items");
let item = document.querySelector(".products .container .items .products-item").offsetWidth;
let arrowBtn = document.querySelectorAll(".products .container .prev_next span");

arrowBtn.forEach((e) => {
  e.addEventListener("click", () => {
    product.scrollLeft += e.className === "next" ? item : -item;
  });
});

// animation progress
let section = document.querySelector('.reviews');
let progress = document.querySelectorAll('.reviews .container .total-rv .prog-rv .content .progres-bar');

window.onscroll = function () {
    if(window.scrollY >= section.offsetTop - 260) {
        progress.forEach((prog) => {
            prog.style.width = prog.dataset.width;
        });
    }
}
