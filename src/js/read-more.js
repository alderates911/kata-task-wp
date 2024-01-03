const readmore_repair = document.querySelector('.repair__read-more')
const sliderContainer = document.querySelector('.slider-container')
const sliderWrapper = document.querySelector('.swiper-wrapper')
const readmoreEquip = document.querySelector('.equipment-repair__button')
const equipmentRepair = document.querySelector('.equipment-repair')
const swiperWrapper = document.querySelector('.slider-wrapper')

function hideList() {
  readmoreEquip.classList.remove('repair__read-more-modified')
  equipmentRepair.classList.remove('equip-show')
  swiperWrapper.classList.remove('show')
  readmoreEquip.textContent = 'Показать все'
  this.removeEventListener('click', hideList)
  this.addEventListener('click', showList)
}

function showList() {
  readmoreEquip.classList.add('repair__read-more-modified')
  equipmentRepair.classList.add('equip-show')
  swiperWrapper.classList.add('show')
  readmoreEquip.textContent = 'Скрыть'
  this.removeEventListener('click', showList)
  this.addEventListener('click', hideList)
}

readmoreEquip.addEventListener('click', showList)

readmore_repair.addEventListener('click', function func() {
  readmore_repair.classList.toggle('repair__read-more-modified')

  if (innerWidth < 1120) {
    sliderContainer.classList.toggle('slider-container-medium')
    sliderWrapper.classList.toggle('slider-wrapper-medium')
  }
  if (innerWidth > 1119) {
    sliderContainer.classList.toggle('slider-container-large')
    sliderWrapper.classList.toggle('slider-wrapper-large')
  }

  if (
    sliderContainer.classList.contains('slider-container-medium') ||
    sliderContainer.classList.contains('slider-container-large')
  ) {
    readmore_repair.textContent = 'Скрыть'
  } else {
    readmore_repair.textContent = 'Показать все'
  }
})
