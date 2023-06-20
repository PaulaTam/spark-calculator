import { useEffect } from 'react';
import '../css/Backgrounds.css';

const About = () => {

    useEffect(() => {
        document.body.classList.add('about_bg');
    }, []);

    return (
        <>
        <h3>About Page</h3>
        <hr />
        <p>
            Hello! Welcome to my project, The Spark Calculator!
        </p>

        <h4>About Me!</h4>
        <hr />
        <p>
            My name is Paula Abigail Tam, but online I usually go by Nyaronya or Yaron. Nice to meet you!
        </p>
        <p>
            I'm a recent graduate {"(May 2023)"} with a BS in Computer Science and Minor in Mathematics.
            Currently job hunting / looking for internships so... y'know... *wink wink nudge nudge*
        </p>

        <h4>What is this project about?</h4>
        <hr />
        <p>
            This is a project that I started on because I play a lot of gacha games and 
            am tired of manually calculating if I have enough rolls to spark. So I figured I would 
            make something that I would use for all my games. I gotta use my Math minor somehow right?
        </p>
        <p>
            And since I'm already working on it, I figured that I should try to make it for 
            other gacha players as well!
        </p>
        <p>
            This project was also inspired by <a href="https://eurea.github.io/">eurea's GBF Exp and Spark Calculator</a>
            , as I have used this a lot when I'm calculating if I have enough to spark in GBF.
        </p>

        <h4>Terms you may not know:</h4>
        <hr />
        <p>
            "Pity" refers to the "Pity System" in gacha games, which is basically a safety net to guarantee the player 
            that they would get a featured character/unit at a certain number of rolls/pulls. Different games have 
            different pity systems, so some terms may vary.
        </p>
        <p>
            "Hard Pity" usually refers to the maximum number of rolls needed to get a banner/high rarity character. 
            "Guaranteed Pity" usually refers to the amount of rolls needed to guarantee the character you want, 
            though this is not applicable to all games.
        </p>
        <p>
            "Spark" comes from the gacha game Granblue Fantasy when they implemented a system that allowed a player 
            to choose the character they want in the current banner after 300 rolls. This method of a pity is referred 
            as the "Spark System". Different games will have different numbers, but for the most part it is usually 300 rolls.
        </p>

        <h3>Contact Me!</h3>
        <hr />
        <p>If you have any questions or suggestions you can contact me on Discord: Yaron#5654</p>
        </>
    )
}

export default About;