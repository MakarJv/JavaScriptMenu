let openMenu = document.querySelector('.openMenu')
let nav = document.querySelector('.nav')
let closeMenu = document.querySelector('.closeMenu')

openMenu.onclick = function () {
  nav.classList.add('open')
  openMenu.classList.add('open')
}

closeMenu.onclick = function () {
  nav.classList.remove('open')
  openMenu.classList.remove('open')
}
