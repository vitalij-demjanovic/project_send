const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActivelasses()

        slide.classList.add('active')
    })
}

function clearActivelasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}