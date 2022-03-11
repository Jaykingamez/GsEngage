import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import {longSleep, middleSleep, sleep} from '../Functions/sleep.js';
import {display} from '../Functions/display.js';


export async function ending1(){
    console.log(chalk.yellowBright(display("With the assistance of the Mortal realm, Gold Mountain was able to industrialize and steer away from its overreliance on Gold Mountain’s resources. Napoleon and his French Revolutionary Forces became the dominant force in Europe while the Gold Mountain became the dominant Cultivation Sect amongst the Higher Realms. A new Golden Age dawned on Man and Cultivator kind. ")));
}

export async function ending2(){
    chalkAnimation.karaoke(display("Forgiveness? But what about those who perished? Are their legacies all for nought? Are their sacrifices all in vain? No, their sacrifice is not in vain, and thus we make them count! "));
    await middleSleep();

    console.log(display("Gold Mountain’s resource extraction went into overdrive as Cultivators geared up for another Cultivator-Mortal war. Naysayers were quickly silenced as jingoism arose in its ranks. Gold Mountain will eventually decay, and the glorious legacy of the cultivators will all be erased."));
}

export async function ending3(){
    console.log(chalk.red(display("Sitting on the fence is a privilege few could afford. And yet nothing changed. Everything stayed the same. The cultivators watched in fear as the Higher Realms decayed due to the resource extraction, and eventually, rationing was mandated. Yet it came, too little, too late. The cultivators had stamped their legacy onto the world, and a world of decay and rot came. ")));

}