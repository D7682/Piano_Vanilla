import { soundStores, keyGrab } from './soundVariables/White_Keys.js';




/*  { plays audio when clicking piano key 'G' } */
keyGrab.key_A[0].addEventListener('click', ()=> {
        soundStores.soundThree.currentTime = 0;
        soundStores.soundThree.play()
})


/* { plays audio on keyboard keydown 'W' }  */



{let fired = false;
        window.addEventListener('keydown', (e)=> {
        let keyCode = e.keyCode;

                if( keyCode == 69){
                
                                if(!fired){
                                fired = true;
                                soundStores.soundThree.currentTime = 0;
                                soundStores.soundThree.play();

                        }
                }
        })


        window.addEventListener('keyup', (e)=> {
                fired = false;
        })
}
