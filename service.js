// NAV-BAR TOGGLE

function toggleMenu() {
    const navList = document.querySelector('.navbar ul');
    navList.classList.toggle('show');
}


let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
// let refreshInterval = setInterval(() => {
//     next.click();
// }, 5000)
function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    // clearInterval(refreshInterval);
    // refreshInterval = setInterval(() => {
    //     next.click();
    // }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})









let items1 = document.querySelectorAll('.slider1 .list .item');
let next1 = document.getElementById('next');
let prev1 = document.getElementById('prev');
let thumbnails1 = document.querySelectorAll('.thumbnail1 .item');


// config param
let countItem1 = items1.length;
let itemActive1 = 0;
// event next click
next.onclick = function () {
    itemActive1 = itemActive1 + 1;
    if (itemActive1 >= countItem1) {
        itemActive1 = 0;
    }
    showSlider1();
}

//event prev click
prev.onclick = function () {
    itemActive1 = itemActive1 - 1;
    if (itemActive1 < 0) {
        itemActive1 = countItem1 - 1;
    }
    showSlider1();
}
// auto run slider
// let refreshInterval = setInterval(() => {
//     next.click();
// }, 5000)

function showSlider1() {
    // remove item active old
    let itemActiveOld1 = document.querySelector('.slider1 .list .item.active');
    let thumbnailActiveOld1 = document.querySelector('.thumbnail1 .item.active');
    itemActiveOld1.classList.remove('active');
    thumbnailActiveOld1.classList.remove('active');

    // active new item
    items1[itemActive1].classList.add('active');
    thumbnails1[itemActive].classList.add('active');

    // clear auto time run slider
    // clearInterval(refreshInterval);
    // refreshInterval = setInterval(() => {
    //     next.click();
    // }, 5000)
}

// click thumbnail
thumbnails1.forEach((thumbnail1, index) => {
    thumbnail1.addEventListener('click', () => {
        itemActive1 = index;
        showSlider1();
    })
})





