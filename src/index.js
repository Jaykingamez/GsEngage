#!/usr/bin/env node

import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import { longSleep, middleSleep, sleep } from '../Functions/sleep.js';
import { display } from '../Functions/display.js';

async function intro() {
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

async function givenChoice2() {
    console.log(display("Nonetheless, the problem remained. The Gold Mountain is dying, and its resources are running low. Quickly, a solution will have to be discovered, and that burden lay on my shoulders, the heir apparent to the Goldman Sect. The Sect Leaders quickly adjourned a meeting to discuss the matter, and as heir, I had little choice but to attend."));
    await sleep();

    console.log(display("Old men with long grey beards sat on one end, while Old women from the sister sect, Goldwomen Sect, sat on the other end. I joined the elders by the end of the table and slotted into my usual position. Keeping up a confident look, I waited for one of the elders to break the silence. The typical speakers quickly opened up the meeting with the agenda, and elders from both sects began discussing matters. They usually start by talking about low hanging fruits, which could usually be resolved quickly by junior brothers and sisters before moving on to more severe topics. "));
    await longSleep();

    console.log(chalk.magenta(display("“Now, let’s discuss the matter that we are all here for. The decline of the Gold Mountain. We have been harvesting too many resources and turning them into pills. We have far outspent the mountain’s rate of regeneration. I suggest we ration the harvesting of the mountain’s resources.”")));
    console.log(display(" An elder spoke up, causing the rest of the room to descend in silence. My head shot up from the hand which it leaned against, becoming interested in the meeting’s affairs for once."));
    await middleSleep();

    console.log(chalk.red(display("“That’s not possible. We need those resources to run most of the things. Electricity, water and heating all require these resources. Even if we use our Qi to power these things, I’m afraid it will not be enough.”")));
    console.log(display("An elder countered. "));
    await middleSleep();

    console.log(chalk.yellow(display("“I’ve been doing research in the lower realms humans. And they may have a solution to that.” An elder pointed out, causing all eyes to fall on that specific elder. “Don’t look at me like that! You are all too prejudiced towards humans. They do have some fascinating inventions that help circumvent Qi, which will help with our current crisis.”")));
    console.log(display("The elder smirked as she observed the eyebrows of her comrades rise. "));
    await middleSleep();

    console.log(chalk.blue(display("“Preposterous!”")));
    console.log(display("An elder bellowed, turning some heads to look his way."));
    console.log(chalk.blue(display("“Those humans brought ruin to us, cultivators, all those years ago, and we promise to pay them back for their transgressions! And now here you’re saying that we should forgive and forget! Lower our heads to these people lower than us!”")));
    await middleSleep();

    console.log(display("The room began to warm up as the elder used his Qi to interact with the environment around him. Cultivators at the lower realm trembled, and I joined them in their trembling Unfortunately, I was not one of those overpowered protagonists in one of those wish fulfilment novels. "));

    console.log(display("A long-elongated stick was retrieved underneath the table, causing many cultivators nearby the elder to jump back in fright. The wielder pointed the stick towards the elder in question who had enacted his Qi realm onto the world. The elder quickly gasped in fear and promptly took up a fighting stance."));

    chalkAnimation.karaoke(display("“What is the meaning of this, Elder Da Qiang!”"), 5);
    await sleep();

    console.log(display("His eyebrows furrowed as he gathered a Qi ball in his hand, ready to shape it into whatever he needed to fend off his attacker. "));
    await sleep();

    chalkAnimation.karaoke(display("“And you act so high and mighty….”"), 3);
    await sleep();

    console.log(display("Elder Da Qiang chuckled before putting away the stick. The elder dropped his fighting stance and stared menacingly towards her, but she calmly smiled."));
    console.log(display("“Nonetheless, before I was rudely interrupted by someone….”"));
    console.log(display("She glanced towards the elder in question, widening her grin momentarily"));
    await middleSleep();

    console.log(display("“The mortals have bested us with their engineering might. I suggest organizing an expedition to pick up the fruits of their labour and use it to deal with our current crisis.”"));

    console.log(chalk.blue(display("“You all cannot be serious listening to her! Those weapons have killed many of us. I propose we stand on our two feet. We, cultivators, should solve our issues. And if we can’t solve it, we can take it from weaker sects like the PWHC sect or the E&Y sect!”")));
    await sleep();

    console.log(display("The meeting quickly became bipartisan as elders scuttled about to and from each side. Each side was offering concessions to notable elders to join their side, and so the elders went profiting off this momentarily conflict to gain more power. I sighed as I studied the rest of my fellow Young Masters and Mistresses standing in the centre caught between the crossfire, unsure of what to do. On the one hand, while it is an excellent opportunity for profit, one must also be aware that they will be offending the other side. We had little to defend ourselves due to the relative weakness of us Young Masters and Mistresses compared with the elders around us. "));
    await middleSleep();

    console.log(display("An elder turned to me and deigned for my opinion, causing the others in the room to turn to me. Feeling judged by the eyes of everyone in the room, I quickly came up with some words that would hopefully please everyone. Or perhaps I should be more upfront and direct about my intentions?"));
    await middleSleep();

}

async function whenChoice2() {
    const answers = await inquirer.prompt({
        name: 'choice_2',
        type: 'list',
        message: display("How should I respond?"),
        choices: [
            display("“I think both elders are right in their various ways of the world. As a young master, it is my utmost duty to study further and truly find out which way is better. I hope that the elders could give us your blessings!”"),
            display("“The ruinous boomsticks of the mortals have slain much of our kind! We shall not deign ourselves to lower ourselves to their feet and plead them for mercy. Cultivators should solve their problems and face the heavens alone!”"),
            display("“The mortals are wise. Yes, most of us began as mortals at the beginning of our lives, yes? So it could be thinking off and asking our thoughtful questions to similar answers. We all face the same issues, and the collapse of the Gold Mountain is something I’m sure no mortals would want to face. Another round of Cultivator – Mortal wars may flare out.”")
        ],
    })

    return answers;
}

async function thenChoice2(answers) {
    if (answers.choice_2 == display("“I think both elders are right in their various ways of the world. As a young master, it is my utmost duty to study further and truly find out which way is better. I hope that the elders could give us your blessings!”")) {
        console.log(display("Some elders nodded in response while others furrowed their bushy eyebrows in response. I breathed a sigh of relief, seeing that I had not attracted the ire of both parties. "));
    } else if (answers.choice_2 == display("“The ruinous boomsticks of the mortals have slain much of our kind! We shall not deign ourselves to lower ourselves to their feet and plead them for mercy. Cultivators should solve their problems and face the heavens alone!”")) {
        console.log(display("Elder Da Qiang frowned at my statement with the triage of elders by his back. The rest of the elders agreed with my statement with applause. A small minority had stoic expressions throughout the discussion, sitting on the fence."));
    } else {
        console.log(display("Elder Da Qiang grinned and came over to clasp my back with a pat, remarking, “Good to see such a wise cultivator among the Goldmen Sect. I see you’ll have a bright future ahead!” "));
    }
}

async function givenChoice3() {
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

async function ending1() {
    console.log(chalk.yellowBright(display("With the assistance of the Mortal realm, Gold Mountain was able to industrialize and steer away from its overreliance on Gold Mountain’s resources. Napoleon and his French Revolutionary Forces became the dominant force in Europe while the Gold Mountain became the dominant Cultivation Sect amongst the Higher Realms. A new Golden Age dawned on Man and Cultivator kind. ")));
}

async function ending2() {
    chalkAnimation.karaoke(display("Forgiveness? But what about those who perished? Are their legacies all for nought? Are their sacrifices all in vain? No, their sacrifice is not in vain, and thus we make them count! "));
    await middleSleep();

    console.log(display("Gold Mountain’s resource extraction went into overdrive as Cultivators geared up for another Cultivator-Mortal war. Naysayers were quickly silenced as jingoism arose in its ranks. Gold Mountain will eventually decay, and the glorious legacy of the cultivators will all be erased."));
}

async function ending3() {
    console.log(chalk.red(display("Sitting on the fence is a privilege few could afford. And yet nothing changed. Everything stayed the same. The cultivators watched in fear as the Higher Realms decayed due to the resource extraction, and eventually, rationing was mandated. Yet it came, too little, too late. The cultivators had stamped their legacy onto the world, and a world of decay and rot came. ")));

}

await intro();

await givenChoice1();
let answers = await whenChoice1();
await thenChoice1(answers);

await givenChoice2();
answers = await whenChoice2();
await thenChoice2(answers);

await givenChoice3();
answers = await whenChoice3();
let ending = await thenChoice3(answers);

if (ending == 1) {
    await ending1();
} else if (ending == 2) {
    await ending2();
} else {
    await ending3();
}

chalkAnimation.rainbow(display("The End!"));
console.log("Terminal can be closed. Restart the application to play again :)");
await longSleep();