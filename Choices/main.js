import chalkAnimation from 'chalk-animation';
import { main1 } from './choice1.js'
import { main2 } from './choice2.js'
import { main3 } from './choice3.js'
import { ending1, ending2, ending3 } from './ending.js'
import { display } from '../Functions/display.js';
import { longSleep } from '../Functions/sleep.js';

export async function main() {
    /*
    main1().then(() => main2()).then(() => main3()).then((ending) => {
        if (ending == 1) {
            return ending1();
        } else if (ending == 2) {
            return ending2();
        } else {
            return ending3();
        }
    }).then(() => {
        console.log(chalkAnimation.rainbow(display("The End!")));
        return longSleep();
    })
    */
}