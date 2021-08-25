// Tab
const tabs = document.querySelectorAll('.tab__btn')
const contents = document.getElementById('tabs-contents');

const changeClass = el => {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active')
    }
    el.classList.add('active')
};

tabs.forEach((btn,index) => {
    btn.addEventListener('click', e => {
        changeClass(e.target)
        let currentIndex = index + 1
        for (let i = 0; i < contents.children.length; i++) {
            contents.children[i].classList.remove('active')
            if (contents.children[i].dataset.content == currentIndex) {
                contents.children[i].classList.add('active')
            }
        }
    })
})

//Modal

const btnOpen = document.getElementById('modal-btn-open')
const btnClose = document.getElementById('modal-window-btn')
const modal = document.getElementById('wrapper-modal')
const modalWindow = document.getElementById('modal-window')


btnOpen.addEventListener('click', () =>{
    modal.classList.add('active')
})

const closeModal = () => {
    modal.classList.remove('active')
}

btnClose.addEventListener('click', closeModal)
modal.addEventListener('click', closeModal)
for(let modalWindow of modal.children) {
    modalWindow.addEventListener('click', event=>{
        event.stopPropagation()
    })
}

//Slider

const prev = document.getElementById('slider-prev'),
      next = document.getElementById('slider-next'),
      slides =  document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot__btn')

let index = 0

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}

const activeDots = n => {
    for (dot of dots) {
        dot.classList.remove('active')
    }
    dots[n].classList.add('active')
}

const prepareCurrentSlide = ind => {
    activeSlide(ind)
    activeDots(ind)
}

const nextSlide = () => {
    if(index === slides.length - 1){
        index = 0;
        prepareCurrentSlide(index)
    } else {
        index++
        prepareCurrentSlide(index)
    }
}

const prevSlide = () => {
    if(index === 0){
        index = slides.length -1
        prepareCurrentSlide(index)
    } else {
        index--
        prepareCurrentSlide(index)
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot
        prepareCurrentSlide(index)
    })
})

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)




