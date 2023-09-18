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

// Waves for home

let wave1 = document.getElementById("wave1");
let wave2 = document.getElementById("wave2");
let wave3 = document.getElementById("wave3");
let wave4 = document.getElementById("wave4");

window.addEventListener('scroll' ,function() {
    let value = window.scrollY;
    wave1.style.backgroundPositionX = 400 + value * 4 + 'px';
    wave2.style.backgroundPositionX = 300 + value * -4 + 'px';
    wave3.style.backgroundPositionX = 200 + value * 2 + 'px';
    wave4.style.backgroundPositionX = 100 + value * -2 + 'px';
})

// Image for Home

let counter = 1;

setInterval(()=>{
    document.querySelector(".home .home-image img.show").classList.remove("show");
    let img = document.querySelector(`.home .home-image .img-${counter}`);
    img.classList.add('show')
    counter++
    if (counter > 2) {
        counter = 1
    }
},3000)

// Products

let product = document.querySelectorAll('.products .container .items');
let preBtn = document.querySelectorAll('.products .container .prev_next .prev');
let nxtBtn = document.querySelectorAll('.products .container .prev_next .next');

product.forEach( (item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
});

// Images
let filterItems = document.querySelector('.image .image-list');
let image_item = document.querySelectorAll('.image .container .image-item .item-box');

window.onload = ()=> {
    filterItems.addEventListener('click', function(selectitem) {
        if (selectitem.target.classList.contains('list')) {
            filterItems.querySelector('.image .image-list .active').classList.remove('active');
            selectitem.target.classList.add('active');
            let filterName = selectitem.target.getAttribute('data-name');
            image_item.forEach((image)=>{
                let filterImage = image.getAttribute('data-name');
                if((filterImage == filterName) || filterName == 'all') {
                    image.classList.remove('hide');
                    image.classList.add('shows');
                } else {
                    image.classList.add('hide');
                    image.classList.remove('shows');
                }
            });

        }
    })
}

// open images
let galleryImages = document.querySelectorAll('.image .container .image-item .item-box img');

if (galleryImages) {
    galleryImages.forEach(function(img) {
        img.onclick = function() {
            let getFullSrc = img.src;
            let getImgSrc = getFullSrc.split("/image/");
            let newSrc = getImgSrc[1];
            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");
            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", `image/${newSrc}`);
            document.body.style.overflow = "hidden";
        }
    });
}

function closeImg() {
    document.querySelector(".img-window").remove();
    document.body.style.overflow = "scroll";
}

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

// scroll animation
window.addEventListener('scroll', animate);

function animate() {
    let anime = document.querySelectorAll('.anime');
    for (let i = 0; i < anime.length; i++) {
        let windowHeight = window.innerHeight;
        let sectionTop = anime[i].getBoundingClientRect().top;
        let sectionPoint = 150;
        if (sectionTop < windowHeight - sectionPoint) {
            anime[i].classList.add('anime-active');
        } else {
            anime[i].classList.remove('anime-active');
        }
    }
}
