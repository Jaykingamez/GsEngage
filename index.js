#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function start(){
    const title = chalkAnimation.karaoke(
        'Sono Chi no sadame, Golddddddddddddden Sect! \n'
    );
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