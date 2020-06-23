import { soundStores, keyGrab } from './soundVariables/White_Keys.js';
import { volumes } from './Volumes/volumes.js';



volumes["song"].oninput = function() {
    soundStores.soundFive.volume = this.value/100;
}


/*  { plays audio when clicking piano key 'G' } */
keyGrab.key_C[0].addEventListener('click', ()=> {
    soundStores.soundFive.currentTime = 0;
    soundStores.soundFive.play()
})


/* { plays audio on keyboard keydown 'W' }  */
{let fired = true;

    window.addEventListener('keydown', (e)=> {
        let keyCode = e.keyCode;

        if( keyCode == 84){
            
            if(!fired) {
                fired = true;
                soundStores.soundFive.currentTime = 0;
                soundStores.soundFive.play();

            }
        }
    })


    window.addEventListener('keyup', (e)=> {
        fired = false;
    })
}
