import { soundStores, keyGrab } from './soundVariables/White_Keys.js';
import { volumes } from './Volumes/volumes.js';



volumes["808"].oninput = function() {
    soundStores.soundTwo.volume = this.value/100;
}

/*  { plays audio when clicking piano key 'G' } */
keyGrab.key_G[0].addEventListener('click', ()=> {
        soundStores.soundTwo.currentTime = 0;
        soundStores.soundTwo.play()
})


/* { plays audio on keyboard keydown 'W' }  */
{let fired = false;
    window.addEventListener('keydown', (e)=> {
        let keyCode = e.keyCode;
    
        //1)this function is saying if keycode is equal to 87 then execute the if statement.
        if( keyCode == 87){

            //2)this function is saying if the variable ("fired") is false then execute whats inside
            //3)after the first keydown ("fired") turns to true until you keyup
            //4)this inside if statement will only execute if ("fired") has a value of which it does in the intial state, and when you keyup.
            if(!fired) {
                fired = true;
                soundStores.soundTwo.currentTime = 0;
                soundStores.soundTwo.play();
                
            }
        };
    })


    window.addEventListener('keyup', ()=> {
        fired = false;
    })
}
