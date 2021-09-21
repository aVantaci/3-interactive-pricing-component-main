const slider = document.getElementById("myRange");
const toggle = document.querySelector('.slider.round')
const views = document.querySelector('.views span')
const cost = document.querySelector('.cost span')
const discount = document.querySelector('.billing p:nth-of-type(3)')

const viewsArray = ['10k', '50k', '100k', '500k', '1m']
const costArray = [8, 12, 16, 24, 36]
const gradientArray = ['0%', '25%', '50%', '75%', '100%']

let multiplier = 1

function sliderMechanism() {
    const value = slider.value
    views.textContent = viewsArray[value]
    cost.textContent = '$' + costArray[value] * multiplier + '.00'
    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%) ${gradientArray[value]}, hsl(224, 65%, 95%) ${gradientArray[value]})`
}

toggle.addEventListener('click', function () {

    if (multiplier === 1) {
        multiplier = 0.75
    } else {
        multiplier = 1
    }

    sliderMechanism()
})

function widthDiscount() {
    if (innerWidth >= 1440) {
        discount.textContent = '25% discount'
    } else {
        discount.textContent = '-25%'
    }
}

slider.oninput = sliderMechanism

window.addEventListener('resize', widthDiscount)

widthDiscount()