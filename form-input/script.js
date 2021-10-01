const labels = document.querySelectorAll('.form-control label')
//here each letter is taken first in a loop and then is splitted and then it is mapped with each index and letter joined to have web effect on the element

labels.forEach(label => {
	label.innerHTML = label.innerText
	.split('')
	.map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
	.join('')
})