const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
//for each element the button is created as it is clicked
sounds.forEach(sound => {
    const btn = document.createElement('button')
    //here we ate giving a class  to button 
    btn.classList.add('btn')
    //innertext property sets or returns the text content of the specified node. Here the innertext sets the btn value to sound.
    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()
        //.play is api which we get by default audio attribute
        document.getElementById(sound).play()
    })
   
    document.getElementById('buttons').appendChild(btn)
})
//whole process is done to stop the song playing when another btn is clicked.
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}