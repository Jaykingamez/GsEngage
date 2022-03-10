import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import {longSleep, middleSleep, sleep} from '../Functions/sleep.js';
import {display} from '../Functions/display.js';

async function givenChoice2(){
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

    return whenChoice2();
}

async function whenChoice2(){
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

    return thenChoice2(answers)
}

async function thenChoice2(answers){
    if(answers.choice_2 == display("“I think both elders are right in their various ways of the world. As a young master, it is my utmost duty to study further and truly find out which way is better. I hope that the elders could give us your blessings!”")){
        console.log(display("Some elders nodded in response while others furrowed their bushy eyebrows in response. I breathed a sigh of relief, seeing that I had not attracted the ire of both parties. "));
    } else if(answers.choice_2 == display("“The ruinous boomsticks of the mortals have slain much of our kind! We shall not deign ourselves to lower ourselves to their feet and plead them for mercy. Cultivators should solve their problems and face the heavens alone!”")){
        console.log(display("Elder Da Qiang frowned at my statement with the triage of elders by his back. The rest of the elders agreed with my statement with applause. A small minority had stoic expressions throughout the discussion, sitting on the fence."));
    } else{
        console.log(display("Elder Da Qiang grinned and came over to clasp my back with a pat, remarking, “Good to see such a wise cultivator among the Goldmen Sect. I see you’ll have a bright future ahead!” "));
    }
}

await givenChoice2();