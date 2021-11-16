console.log('test');

// получить элемент с селектором .main_cover_items button
const navBtnOpen = document.querySelector('.main_cover_items button');
// получить элемент с селектором button.close
const navBtnClose = document.querySelector('button.close');
// получить элемент с селектором nav.nav
const nav = document.querySelector('nav.nav');

console.log(navBtnOpen);
console.log(navBtnClose);
console.log(nav);


// слушаем событие клик по кнопке navBtnClose
navBtnClose.addEventListener('click', function() {
	nav.classList.remove('flex');
	nav.classList.add('hide');
})

// слушаем событие клик по кнопке navBtnOpen
navBtnOpen.addEventListener('click', function() {
	nav.classList.remove('hide');
	nav.classList.add('flex');
})