const menuBtn = document.querySelector('.menu__close-btn')
const headerMenuBtn = document.querySelector('.header__menu-btn')
const menu = document.querySelector('.menu')
const overlay = document.querySelector('.modal-overlay')
const feedback = document.querySelector('.feedback')
const feedbackClose = document.querySelector('.feedback__close-btn')
const feedbackOpen = document.querySelector('.feedback-open')
const feedbackOpenSecond = document.querySelector('.header__chat')
const callOpen = document.querySelector('.call-open')
const call = document.querySelector('.call')
const callCloseBtn = document.querySelector('.call__button')
const navigationBtn = document.querySelectorAll('.navigation__button')
const menuNavLinks = document.querySelectorAll('.menu__link')
const headerOpenBtn = document.querySelector('.header__call')

function menuSwitcherLinks(e) {
  let current = e.target
  for (let i = 0; i < menuNavLinks.length; i++) {
    menuNavLinks[i].classList.remove('menu__link_active')
  }
  current.classList.add('menu__link_active')
  console.log(current)
}

function switcherNav(e) {
  for (let i = 0; i < navigationBtn.length; i++) {
    navigationBtn[i].classList.remove('navigation__button_active')
  }
  let current = e.target
  current.classList.add('navigation__button_active')
}

for (let i = 0; i < navigationBtn.length; i++) {
  navigationBtn[i].addEventListener('click', switcherNav)
}

for (let i = 0; i < menuNavLinks.length; i++) {
  menuNavLinks[i].addEventListener('click', menuSwitcherLinks)
}

function opencloseMenu() {
  menu.classList.toggle('menu-active')
  overlay.classList.toggle('modal-overlay-active')
}

function openCloseFeedback(e) {
  e.preventDefault()
  feedback.classList.toggle('feedback-active')
  overlay.classList.toggle('modal-overlay-active')
  if (menu.classList.contains('menu-active')) {
    menu.classList.remove('menu-active')
    overlay.classList.add('modal-overlay-active')
  }
}

function openCloseCall() {
  call.classList.toggle('call-active')
  overlay.classList.toggle('modal-overlay-active')
  if (menu.classList.contains('menu-active')) {
    menu.classList.remove('menu-active')
    overlay.classList.add('modal-overlay-active')
  }
}

menuBtn.addEventListener('click', opencloseMenu)

headerMenuBtn.addEventListener('click', opencloseMenu)

feedbackOpen.addEventListener('click', openCloseFeedback)
feedbackOpenSecond.addEventListener('click', openCloseFeedback)
feedbackClose.addEventListener('click', openCloseFeedback)

overlay.addEventListener('click', function () {
  overlay.classList.remove('modal-overlay-active')
  feedback.classList.remove('feedback-active')
  menu.classList.remove('menu-active')
  call.classList.remove('call-active')
})

headerOpenBtn.addEventListener('click', openCloseCall)
callOpen.addEventListener('click', openCloseCall)
callCloseBtn.addEventListener('click', openCloseCall)
