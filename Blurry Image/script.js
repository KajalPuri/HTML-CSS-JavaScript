const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
//initialize value load which will move from 0 to 100
let load = 0;
//running blurr function in interval so the changes can be constant in evey 30 secs
let int = setInterval(blurring, 30)
//called function called blurring and increase load by every 30 sec
function blurring() {
	load++
//if load is greater than 99 we wanit to stop interval by using clearInterval(int)
	if (load > 99)  {
		clearInterval(int)
	}
     //increasing 0% from 0 to 100 by using string interpolation
	loadText.innerText = `${load}%`
	//setting opacity value of loadtext. It goes from 0 to 1. Here we are mapping loadtext to opacity
	loadText.style.opacity = scale(load, 0, 100, 1, 0)
	//setting blur of the image and in the same way as loadText
	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }