class Slider {
  // ссылка на класс slider__content
  static #content = null
  // ссылка на кнопки
  static #left = null
  static #right = null
  // ссылка на текущую картинку, которая видна
  static #count = 1
  // ссылка на количество картинок
  static #max = null

  static init = () => {
    this.#content = document.querySelector(
      '.slider__content',
    )
    this.#left = document.querySelector(
      '.slider__button--left',
    )
    this.#right = document.querySelector(
      '.slider__button--right',
    )

    this.#max = this.#content.childElementCount

    this.#left.onclick = () => this.#slide('left') //TODO по-другому, чем в js-to-do-list
    this.#right.onclick = () => this.#slide('right')
  }

  static #slide = (side) => {
    const offsetWidth = this.#content.offsetWidth //ширина элемента
    const scrollLeft = this.#content.scrollLeft // меняется, насколько элемент уже прокручен
    const scrollWidth = this.#content.scrollWidth // не изменяется!!! сколько места доступно для прокрутки

    let scroll = 0

    // MY ======================================================================
    // this.#count = Math.round(scrollLeft / offsetWidth)

    if (side === 'left') {
      if (this.#count === 1) {
        this.#count = this.#max
        scroll = (this.#count - 1) * offsetWidth
      } else {
        this.#count -= 1
        scroll = (this.#count - 1) * offsetWidth
      }
    }

    if (side === 'right') {
      // if (scrollLeft === scrollWidth - offsetWidth) {}
      if (this.#count === this.#max) {
        this.#count = 1
        scroll = 0
      } else {
        this.#count += 1
        scroll = (this.#count - 1) * offsetWidth
      }
    }

    this.#content.scrollTo({
      top: 0,
      left: scroll,
      behavior: 'smooth',
    })

    // MY ======================================================================
    // if (side === 'right' && scrollLeft < scrollWidth) {
    //   this.#content.scrollBy({
    //     left: offsetWidth,
    //     top: 0,
    //     behavior: 'smooth',
    //   })
    // }

    // if (side === 'left' && scrollLeft > 0) {
    //   this.#content.scrollBy({
    //     left: -offsetWidth,
    //     top: 0,
    //     behavior: 'smooth',
    //   })
    // }
    // MY ======================================================================
  }
}

Slider.init()

class Header {
  static #height = null
  static #wrapper = null
  static #button = null

  static #isOpen = false

  static init() {
    this.#button = document.querySelector('.header__button')
    this.#wrapper = document.querySelector(
      '.header__wrapper',
    )
    this.#height = document.querySelector(
      '.header__bottom',
    ).offsetHeight

    this.#button.onclick = this.#toggle
  }

  static #toggle = () => {
    if (this.#isOpen) {
      this.#button.classList.replace(
        'header__button--open',
        'header__button--close',
      )

      this.#wrapper.style.height = 0
    } else {
      this.#button.classList.replace(
        'header__button--close',
        'header__button--open',
      )

      this.#wrapper.style.height = `${this.#height}px`
    }

    this.#isOpen = !this.#isOpen
  }
}

Header.init()
