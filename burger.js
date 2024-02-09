let openBurger = document.querySelector('.burger__button');
let popUp = document.querySelector('.nav__tools');
let navItem = document.querySelectorAll('.nav__item');
let burgerMenuLine = document.querySelectorAll('.burger__line');
let body = document.querySelector('.body');
let navItems = document.querySelectorAll('.nav__item');

function closeBurgerMenu() {
      burgerMenuLine[0].classList.remove('line__first');
      burgerMenuLine[1].classList.remove('line__second');
      burgerMenuLine[2].classList.remove('line__third');
      popUp.classList.remove('open');
}

navItems.forEach((link) => {
      link.addEventListener("click", closeBurgerMenu);
});

// body.addEventListener("click", closeBurgerMenu);

openBurger.addEventListener('click', function () {
      console.log('yuy')
      popUp.classList.toggle('open');
      navItem.forEach(index => {
            index.classList.toggle('open');
      });
      burgerMenuLine[0].classList.toggle('line__first');
      burgerMenuLine[1].classList.toggle('line__second');
      burgerMenuLine[2].classList.toggle('line__third');
})


