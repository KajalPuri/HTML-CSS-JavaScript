//bringing all the pannels to javascript file
//puts the panel in node list which is like array
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
	panel.addEventListener( 'click' ,() => {
		removeActiveClasses()
		panel.classList.add('active')
	})
})

function removeActiveClasses() {
	panels.forEach(panel => {
		panel.classList.remove('active')
	})
}