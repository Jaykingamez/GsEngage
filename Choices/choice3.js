import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import { longSleep, middleSleep, sleep } from '../Functions/sleep.js';
import { display } from '../Functions/display.js';

export async function givenChoice3() {
    console.log(display("I don’t know whether an Elder had a grudge with me. But I was sent to the Human Realms, where the Qi quality was poorer. I could feel my ability weakening as each second passed here. The faces of my entourage similarly displayed their displeasure for the world to see."));

    console.log(display("Humans gazed upwards at the cultivators zipping by in the sky on top of their blades, flying straight to the Capital of the Revolution, Paris. Scowls and whispers spread amongst the populace as the soldiers raised their rifles towards the flying superhumans. Artillerymen raised the angles of the artillery barrels, aiming it right at us. As we zipped overhead to Paris, the clusters of soldiers increased in numbers. Soldiers dotted the once beautiful Parisian landscape, standing on top of houses and guard towers, at the group in the sky. "));
    await middleSleep();

    console.log(display("Nearing the Palace of Versailles, a man marched out of the building with a contingent of soldiers. The well-cultivated hairy bush on his lip shook with every indecipherable command he uttered. His men then surrounded him; they formed a circular ring around him. Bayonets at the end of their rifles pointed in the air aiming at us, who descended on the palace ground with a light thud. Both parties began an intense standoff as I lifted my blade from my feet and kept it close to me. A fight always broke out, and some new revolutionary leader wanted to put on a show of their strength. My group quickly surrounded me, performing a similar formation like the Revolutionary soldiers. "));
    await middleSleep();

    console.log(display("The officer raised his hand, and I raised my hand with him, making most soldiers drop their battle stances. We walked closer to one another and stretched out our hands. Clasping our hands tightly, we shook it. The man did not try to turn it into a competition of strength, knowing our cultivated power. Understanding that fighting our way out of the city was unpleasant, I met his handshake evenly. "));
    await middleSleep();

    console.log(display("A soldier amongst the group, a tall one, snapped his fingers, causing the officer to release the handshake. He turned around the soldier, who walked towards me. He introduced himself, taking off his hat, “The name’s Napoleon.” He introduced himself somewhat grandiosely, causing the officer to bow towards him. "));
    await middleSleep();

    console.log(display("I raised my eyebrow at the man’s intriguing introduction and returned the gesture, “My name is Shao Ye.” We shook hands instead, and no political posturing was done as well. "));

    console.log(display("“Shall we enter the Palace?” The man beamed, gesturing at the grandiose human construct behind him. The light of chandeliers seeped through the giant glass windows, casting a shadow behind our backs. Beautiful carpets from animals all around the ground dotted the ground inside the palace. I nodded, and both of our groups walked in. Paintings dotted in the hallways, some defaced, displaying a hateful past. "));
    await middleSleep();

    console.log(display("The next thing we knew, we were in a room where few could disturb us. I could feel the dregs of Qi being absorbed from my body as I walked in. Napoleon showed an apologetic face, but his eyes showed how he felt. “Procedure, no offence to Mr Shao Ye.” As he sat on a chair, he professed, gesturing at the other end. "));
    await middleSleep();

    console.log(display("I sat on the other end and glanced at the teacups on the table. Napoleon raised an eyebrow and gestured towards it, noticing where my eyes were looking. Glancing at him, Napoleon nodded, and I picked up the cup that Napoleon faced, studying the expression on Napoleon’s face. He smirked, picked up the remaining cup, and began drinking its contents. No doubt from the furrows of the skin of his face, I could tell that the man found my suspicion to be funny. Nonetheless, placing the cup back on the table, he grinned as he watched me finish the contents of my tea slowly. "));
    await middleSleep();

    console.log(display("“Let’s get right down to business.” Napoleon crossed his legs and leaned back on his chair’s armrest. Flipping a tuft of hair that covered his forehead, he continued, “To secure the cooperation of the French Revolutionary Republic to share its industrial technologies to Goldman Sec and supply the Sect with the energy resources, we have some conditions.”"));
    await middleSleep();

    console.log(display("“Number 1. We require your assistance to destroy the remaining Royal Cultivator army located in the Far East. It will be frigid, and no doubt our men will be unable to handle the freezing temperature. I am not asking you to step out onto the frontline; I want your Sect to protect our supply lines. And help keep us supplied. The temperature will surely not be a problem for you."));
    await middleSleep();

    console.log(display("“Number 2. The Royal Cultivator Navy has been blockading our ports. Currently, our navy will meet them off Cape Trafalgar in Spain. We could use your help in destroying the fleet. My advice is to join our naval forces as privateers; that is a way to hide your involvement.” Napoleon placed an image of a rather dashing European fellow on the table. I picked it up and glanced at the man wearing a strange looking hat. “The man is known as Horatio Nelson. I want you to capture him alive, but it is fine if he dies. Let’s say we will be more willing to share more of our technological innovations with the Sect. ”"));
    await longSleep();
}

async function whenChoice3() {
    const answers = await inquirer.prompt({
        name: 'choice_3',
        type: 'list',
        message: display("How should I respond?"),
        choices: [
            display("“Napoleon, you’re a reasonable man. We can both profit from this. We have a deal.”"),
            display("“I’m sorry. But why should we work with filthy mortals? Are you sure this is the right tone you should be speaking with me? You should be begging me for our service, and maybe I will deign myself to listen to this puny ant.” "),
            display("“We are not interested in interfering in the Cultivator Revolutionary Wars. I do wish you good luck on the battlefield, Napoleon.”")
        ],
    });

    return answers;
}

async function thenChoice3(answers) {
    if (answers.choice_3 == display("“Napoleon, you’re a reasonable man. We can both profit from this. We have a deal.”")) {
        console.log(display("A bright new future will dawn on the lower and upper realms. A promising new future where two dominant powers will rule the lands. The Gold Mountain’s lands will prosper with the industrial might of the Revolutionary republics."));
        return 1;
    } else if (answers.choice_3 == display("“I’m sorry. But why should we work with filthy mortals? Are you sure this is the right tone you should be speaking with me? You should be begging me for our service, and maybe I will deign myself to listen to this puny ant.” ")) {
        console.log(display("Napoleon scowled and demanded I leave after shouting in an unknown language. He took a deep breath and pointed towards the door. As I left, my enhanced hearing allowed me to catch a couple of words, “I knew those cultivators are all the same.”"));
        return 2;
    } else {
        console.log(display("Napoleon shrugged and remarked, “Your loss, but we shall win the battlefield. We shall purge the continent from the influence of Cultivators and return the power to where it truly belongs, the people!” He enthusiastically preached, causing me to be a little taken aback by his words. Either he is a good actor, or he is genuinely the saint he made himself out to be. I nodded and took my leave, keeping these comments in my heart. "));
        return 3;
    }
}

export async function main3() {
    givenChoice3(() => whenChoice3()).then((answers) => thenChoice3(answers));
}
await main3();