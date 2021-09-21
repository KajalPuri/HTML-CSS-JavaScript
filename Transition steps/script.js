const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
//for setting like an array
const circles = document.querySelectorAll('.circle')
//setting active part for the circle
let currentActive = 1
//adding event listener
next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

//calling circle function
function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
//calling circle active
    const actives = document.querySelectorAll('.active')
//setting width of circle
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
//if at the beginning
    if(currentActive === 1) {
        prev.disabled = true
		//if at the end
    } else if(currentActive === circles.length) {
        next.disabled = true
		//if in the middle
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
