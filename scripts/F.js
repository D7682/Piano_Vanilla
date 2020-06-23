import { soundStores, keyGrab } from './soundVariables/White_Keys.js';




/*  { Is adding sound to the white key F onclick }  */
keyGrab.key_F[0].addEventListener('click', ()=> {
        soundStores.soundOne.currentTime = 0;
        soundStores.soundOne.play();
})

/*  { Plays audio on keydown 'Q' }  */


{let fired = true;

    window.addEventListener('keydown', (e)=> {
        let keyCode = e.keyCode;

        if( keyCode == 81){
            
            if(!fired) {
                fired = true;
                soundStores.soundOne.currentTime = 0;
                soundStores.soundOne.play();
            }
        }
    })


    window.addEventListener('keyup', (e)=> {
        fired = false;
    })
}

