import { soundStores, keyGrab } from './soundVariables/White_Keys.js';




/*  { Is adding sound to the white key F onclick }  */
keyGrab.key_B[0].addEventListener('click', ()=> {
    soundStores.soundFour.currentTime = 0;
    soundStores.soundFour.play();
})

/*  { Plays audio on keydown 'Q' }  */
window.addEventListener('keydown', (e)=> {
let keyCode = e.keyCode;

if( keyCode == 82){
    soundStores.soundFour.currentTime = 0;
    soundStores.soundFour.play();
}
})
