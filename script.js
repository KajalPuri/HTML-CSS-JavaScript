const boxes = document.querySelectorAll('.box')
//fireoff an event using scroll annd the fucntion called checkboxes
window.addEventListener('scroll', checkBoxes)

checkBoxes()//if you remove this, the boxes will not appear until you scroll

function checkBoxes() {
    //triggerBottom is a pint where boxes tigger in window
    const triggerBottom = window.innerHeight / 5 * 4
     //looping through boxes
    boxes.forEach(box => {
        //getBoundingClientRect method returns a DOMRect (describes the size and position of a rectangle) providing information about the size of an element and its psoiton relative to the viewport
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
