import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import { sleep } from '../Functions/sleep.js';
import { display } from '../Functions/display.js';

async function givenChoice1() {
    const sound = chalkAnimation.neon(display('Tap. Tap. Tap.'));
    await sleep();
    await sound.stop()

    console.log(display("The finger tapped on the wooden surface repeatedly, producing differing sounds based on the differing amount of force applied."));
    console.log(chalk.yellow(display("So... uhh.. yes! Young Master, the Goldman Sects is harvesting too many resources from the surrounding environments. The resources will run dry soon, and our beloved Gold Mountain may be ruined. What will our dear ancestors think of us!")));
    console.log(display("A Junior Brother made his case in front of me. He acted rather dramatically, adding gestures and short pauses at times to strengthen his points, driving up anticipation of his words. He eventually stopped, looking at me as to ascertain my reaction. I kept up my poker face, and the tapping continued. Slight annoyance occasionally appeared on the junior brother’s face, but he quickly wiped it away as soon as it appeared. Maybe humans would not catch it, but cultivators quickly detected slight reactions. "));
}

async function whenChoice1() {
    const answers = await inquirer.prompt({
        name: 'choice_1',
        type: 'list',
        message: display("How should I respond?"),
        choices: [
            display("Junior Brother, you make a point. I’ll see what I can do."),
            display("Junior Brother! You cannot expect us to abandon the ways of our ancestors! Where do you think the power of the Goldman Sects came from? The Gold Mountain! Are we to throw away a millennium of traditions to heed your ruinous words! Begone from my sight!")
        ],
    });
    return answers;
}

async function thenChoice1(answers) {
    if (answers.choice_1 == display("Junior Brother, you make a point. I’ll see what I can do.")) {
        console.log(display("As the words soon came from my mouth, the corners of the Junior Brother’s lip inched upwards slightly. He bowed and turned around, leaving my room."));
    } else {
        console.log(display("I hollered, using some of my Qi to enhance the volume. The Qi enhanced voice quickly overwhelmed my junior brother, and he promptly cowered in fear. He immediately slammed his knees onto the ground and begged for forgiveness. He began kowtowing to me, slamming his forehead repeatedly to the ground. The earth trembled with a thud. He did it for quite some time until I felt that he was repentant enough. I told him to leave with a smirk, and he quickly scattered away. I took the time to enjoy his pathetic sight. "));
    }
}

export async function main1() {
    givenChoice1()
    .then(() => whenChoice1())
    .then((answers) => thenChoice1(answers))
    .catch((error) => {
        console.log(error);
    });
}

await main1();