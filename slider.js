//visible part of slider
let viewport = document.getElementById('slider__left_window').offsetWidth;
let viewportMain = document.getElementById('slider__main_window').offsetWidth;
let btnNext = document.querySelector('.button__next');
let btnPrev = document.querySelector('.button__prev');

//slider itself with pictures
let sliderLeft = document.querySelector('.slider__left');
let sliderRight = document.querySelector('.slider__right');
let sliderMain = document.querySelector('.slider__main');
let pagination = document.querySelectorAll('.pagination__item');
let viewSlide = 0;
pagination[viewSlide].style.backgroundColor = '#871912';


btnNext.addEventListener('click', function () {
    // след строкой можно точнее установить длину width картинки, чтобы совпадала с шириной окна, но в этом случае подправила в css 
    // viewport = document.getElementById('slider__left_window').offsetWidth;
    if (viewSlide < 4) {
        viewSlide++;
        pagination[viewSlide - 1].style.backgroundColor = '#6F6868';
        pagination[viewSlide].style.backgroundColor = '#871912';
    } else {
        viewSlide = 0;
        pagination[viewSlide].style.backgroundColor = '#871912';
        pagination[pagination.length - 1].style.backgroundColor = '#6F6868';
    }
    sliderLeft.style.right = viewSlide * viewport + 'px';
    sliderRight.style.right = viewSlide * viewport + 'px';
    sliderMain.style.right = viewSlide * viewportMain + 'px';
})

btnPrev.addEventListener('click', function () {

    if (viewSlide > 0) {
        console.log(viewSlide)
        pagination[viewSlide].style.backgroundColor = '#6F6868';
        viewSlide--;
        console.log(viewSlide)
        pagination[viewSlide].style.backgroundColor = '#871912';
    } else {
        viewSlide = (pagination.length - 1);
        pagination[pagination.length - 1].style.backgroundColor = '#871912';
        pagination[0].style.backgroundColor = '#6F6868';
    }

    sliderLeft.style.left = -viewSlide * viewport + 'px';
    sliderRight.style.left = -viewSlide * viewport + 'px';
    sliderMain.style.left = -viewSlide * viewportMain + 'px';

})

// ******** chaiging pics automatically
let i = 0;
let timerId = setTimeout(function tick() {
    // viewport = document.getElementById('slider__viewport').offsetWidth;
    if (viewSlide < 4) {
        pagination[viewSlide].style.backgroundColor = '#6F6868';
        viewSlide++;
        pagination[viewSlide].style.backgroundColor = '#871912';
    }
    else {
        viewSlide = 0;
        pagination[viewSlide].style.backgroundColor = '#871912';
        pagination[pagination.length - 1].style.backgroundColor = '#6F6868';
    }

    sliderLeft.style.right = viewSlide * viewport + 'px';
    sliderRight.style.right = viewSlide * viewport + 'px';
    sliderMain.style.right = viewSlide * viewportMain + 'px';
    timerId = setTimeout(tick, 3000);
});


// ************************* seasons changing
let autumn__Button = document.getElementById('autumn')
let winter__Button = document.getElementById('winter')
let spring__Button = document.getElementById('spring')
let summer__Button = document.getElementById('summer')

let leftSlider = document.querySelectorAll('.slider__left_img')
let mainSlider = document.querySelectorAll('.slider__main_img')
let rightSlider = document.querySelectorAll('.slider__right_img')
let audio = document.getElementById('audio')


spring__Button.addEventListener('click', function () {
    document.getElementById('header').style='background: url(./img/spFon.jpg) no-repeat center top/cover'
    audio.src ='./audio/VivaldiSpring.mp3'
    leftSlider.forEach((el, num) =>
        document.getElementById(`left${num + 1}`).src = `./img/sliderSpring/sp${num + 1}.jpg`)
    mainSlider.forEach((el, num) => {
        if (num < 4) { document.getElementById(`main${num + 1}`).src = `./img/sliderSpring/sp${num + 2}.jpg`}
        else { document.getElementById(`main${num + 1}`).src = `./img/sliderSpring/sp1.jpg` }
    })
    rightSlider.forEach((el, num) => {
        if (num <= 2) {document.getElementById(`right${num + 1}`).src = `./img/sliderSpring/sp${num + 3}.jpg`}
        else {document.getElementById(`right${num + 1}`).src = `./img/sliderSpring/sp${num - 2}.jpg`}
    })
})

summer__Button.addEventListener('click', function () {
    document.getElementById('header').style='background: url(../img/sFon.jpg) no-repeat center top/cover'
    audio.src ='./audio/VivaldiSummer.mp3'
    leftSlider.forEach((el, num) =>
        document.getElementById(`left${num + 1}`).src = `./img/sliderSummer/s${num + 1}.jpg`)
    mainSlider.forEach((el, num) => {
        if (num < 4) { document.getElementById(`main${num + 1}`).src = `./img/sliderSummer/s${num + 2}.jpg`}
        else { document.getElementById(`main${num + 1}`).src = `./img/sliderSummer/s1.jpg` }
    })
    rightSlider.forEach((el, num) => {
        if (num <= 2) {document.getElementById(`right${num + 1}`).src = `./img/sliderSummer/s${num + 3}.jpg`}
        else {document.getElementById(`right${num + 1}`).src = `./img/sliderSummer/s${num - 2}.jpg`}
    })
})

winter__Button.addEventListener('click', function () {
    document.getElementById('header').style='background: url(../img/wFon.jpg) no-repeat center top/cover'
    audio.src ='./audio/VivaldiWinter.mp3'
    leftSlider.forEach((el, num) =>
        document.getElementById(`left${num + 1}`).src = `./img/sliderWinter/w${num + 1}.jpg`)
    mainSlider.forEach((el, num) => {
        if (num < 4) { document.getElementById(`main${num + 1}`).src = `./img/sliderWinter/w${num + 2}.jpg`}
        else { document.getElementById(`main${num + 1}`).src = `./img/sliderWinter/w1.jpg` }
    })
    rightSlider.forEach((el, num) => {
        if (num <= 2) {document.getElementById(`right${num + 1}`).src = `./img/sliderWinter/w${num + 3}.jpg`}
        else {document.getElementById(`right${num + 1}`).src = `./img/sliderWinter/w${num - 2}.jpg`}
    })
})

autumn__Button.addEventListener('click', function () {
    document.getElementById('header').style='background: url(../img/nature.jpg) no-repeat center top/cover'
    audio.src ='./audio/VivaldiAutumn.mp3'
    leftSlider.forEach((el, num) =>
        document.getElementById(`left${num + 1}`).src = `./img/sliderAutumn/au${num + 1}.jpg`)
    mainSlider.forEach((el, num) => {
        if (num < 4) { document.getElementById(`main${num + 1}`).src = `./img/sliderAutumn/au${num + 2}.jpg`}
        else { document.getElementById(`main${num + 1}`).src = `./img/sliderAutumn/au1.jpg` }
    })
    rightSlider.forEach((el, num) => {
        if (num <= 2) {document.getElementById(`right${num + 1}`).src = `./img/sliderAutumn/au${num + 3}.jpg`}
        else {document.getElementById(`right${num + 1}`).src = `./img/sliderAutumn/au${num - 2}.jpg`}
    })
})




