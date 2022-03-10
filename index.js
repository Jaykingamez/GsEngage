#!/usr/bin/env node

import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import {longSleep, sleep} from './Functions/sleep.js';
import {display} from './Functions/display.js';

async function start(){
    const title = chalkAnimation.karaoke(display("Sono Chi no sadame, Golddddddddddddden Sect!"), 5);
    await sleep();
    title.stop()

    console.log(`
        ${chalk.green("How to play")}
        This is a Choose Your Own Adventure Game
        Your choices will have an impact on the world around you
        ${chalk.red("Have fun! :)")}
    `)
}

await start();