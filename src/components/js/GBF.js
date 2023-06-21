import { FullPanel } from './Tabs';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/Backgrounds.css';
import { gbfImgs } from '../../images/index.js';

const GBFCal = () => {
    //setting state for crystals, single tix, 10 tix values
    const [crystals, setCrystals] = useState('0');
    const [singleTickets, setSingleTickets] = useState('0');
    const [multiTickets, setMultiTickets] = useState('0');
    const [totalRolls, setTotalRolls] = useState('0');

    //get total amount of rolls from just raw funds
    useEffect(() => {
        const total = ~~(
            (parseInt(crystals, 10) / 300)
            + parseInt(singleTickets, 10)
            + (parseInt(multiTickets, 10) * 10)
        );
        setTotalRolls(total.toString());
    }, [crystals, singleTickets, multiTickets])

    //ebifry count -> enter amount of shrimp
    const [ebifry, setEbifry] = useState('0');
    const [totalWithEbifry, setTotalWithEbifry] = useState('0');

    useEffect (() => {
        const total = (parseInt(totalRolls) + parseInt(ebifry));
        setTotalWithEbifry(total.toString());
    }, [totalRolls, ebifry])

    return (
        <div id="items">
            <Row xs="auto" md="4" lg="3">
                <Col>
                    <label name="crystals" htmlFor="crystals">Crystals:</label>
                    <input className="input-sm form-control" min="0" max="999999" step="50" type="number" id="currency" value={crystals} onChange={e => setCrystals(e.target.value)} />
                </Col>
                <Col>
                    <label name="singleTickets" htmlFor="singleTickets">1x tickets:</label>
                    <input className="input-sm form-control" min="0" max="999999" type="number" id="ticket" value={singleTickets} onChange={e => setSingleTickets(e.target.value)} />
                </Col>
                <Col>
                    <label name="multiTickets" htmlFor="multiTickets">10x tickets:</label>
                    <input className="input-sm form-control" min="0" max="999999" type="number" id="ticket" value={multiTickets} onChange={e => setMultiTickets(e.target.value)} />
                </Col>
            </Row>
            <Row  xs="auto" md="4" lg="3">
                <Col>
                    <label id="totalRolls" name="totalRolls" htmlFor="totalRolls">Total Rolls:</label>
                    <input disabled className="input-sm form-control" min="0" max="999999" type="text" value={totalRolls + "/300"} />
                </Col>
            </Row>
            <hr />
            <Row id="extra">Total Rolls if you use up all your Ebifry (from Premium Friday):</Row>
            <Row  xs="auto" md="4" lg="3">
                <Col>
                    <label name="ebifry" htmlFor="ebifry">Ebifry Count:</label>
                    <input className="input-sm form-control" min="0" max="999" type="number" id="ebifry" value={ebifry} onChange={e => setEbifry(e.target.value)} />
                </Col>
                <Col>
                    <label id="totalWithEbifry" htmlFor="totalWithEbifry">Total Rolls (with Ebifry):</label>
                    <input disabled className="input-sm form-control" min="0" max="999999" type="text" value={totalRolls + " + " + ebifry + " = " + totalWithEbifry + "/300"} />
                </Col>
            </Row>
        </div>
    )
}

const GBFGuide = () => {
    return (
        <div id="guide">
            <br />
            <h3>Intro</h3>
            <hr />
            <p>So you wanna farm... well duh, you're playing Grindblue Fantasy, one of the grindiest games to ever exist.</p>
            <p>Okay, but seriously though you want to obtain enough rolls to spark, and now you find yourself short on funds! What will you do?! D:</p>
            <p>You've come to the right place! Here I'll list the common ways to farm crystals and rolls! Please keep in mind that I might miss some methods, so please let me know if I'm missing any!</p>
            <p>As a note, a lot of information can also be found on <a href="https://gbf.wiki/Main_Page"> the GBF wiki</a>, which is a great resource for any GBF player, so please use it!</p>
            <br />
            <h4>Daily Bonus / Login Bonus</h4>
            <hr />
            <p>In a 15 day period, the 4th, 9th and 14th day gives 100, 150, and 200 crystals respectively.</p>
            <p>In the same 15 day period, you recieve a single draw ticket on th 5th, 10th, and 15th day.</p>
            <br />
            <h4>Main Story</h4>
            <h4>Events</h4>
                <h5>Event Story</h5>
                <h5>Event Daily</h5>
                <p>For most events, there is a daily mission that will reward 50 crystals when completed.</p>
                <h5>Event Trophies</h5>
                <h5>Event Boxes</h5>
                <p>For Story Events, each box from Box 1 to Box 20 will have 100 crystals.</p>
            <br />
            <h4>Trophies</h4>
            <hr />
            <p>Many trophies in GBF grant crystals or tickets as a reward for obtaining the trophy! I will go over a few types of trophies that are easy to obtain, however for the full list of trophies can be found <a href="https://gbf.wiki/Trophy">here</a>!</p>
                <h5>"Total _____" Trophies</h5>
                <p>Total {"(Character)"} Level, Number of {"(Unique)"} Weapons Obtained, Number of {"(Unique)"} Summons Obtained</p>
            <br />
            <h4>Fate Episodes</h4>
            <hr />
            <p>New characters that you obtain will allow the player to view that character's fate episode. The first fate episode will always grant 50 crystals!</p>
            <p>To view what fate episodes you have, click the mail icon, then click on the "Fate Episode" notification. This will you bring you to the page where you can view all your new fate episodes. Conveniently, all the fate episodes that would reward crystals will appear first {"(You can tell that it grants crystals by that huge crystal icon on the right)"}!</p>
            <img src={gbfImgs.fate_ep_ex} alt="Fate Episode Screen example with new character" width="30%" height="30%"/>
            <p>If you aren't interested in that character's story, you can just skip it and will still be rewarded. {"(Don't worry, if you end up wanting to read the fate episode after you skipped it, you can always rewatch it in the Journal.)"}</p>
            <br />
            <h4>Golden Gifts</h4>
            <hr />
            <p>When opening a Golden Gift, there is a chance that you can get 1,000 crystals or 3 single draw tickets.</p>
            <p>To obtain Golden Gifts, draw from boxes 1-4 from story events.</p>
            <br />
            <h4>Co-op Mission Point Trade</h4>
            <hr />
            <p>You can trade 1 mission point for a single draw ticket in the co-op mission point trade.</p>
            <img src={gbfImgs.coop_tix1} alt="Co-op Mission Point Trade for Single Ticket" width="40%" height="40%"/>
            <p>Keep in mind that it is 1 ticket every trade refresh, and you can only refresh the trades once you trade everything. This is 40 mission points 
                {"(including the point for the single ticket)"}, which is 14 days of doing all 3 of the daily co-op missions.</p>
        </div>
    )
}

const GBF = () => {

    useEffect(() => {
        document.body.className = "";
        document.body.classList.add('gbf_bg');
    }, []);

    return (
        <FullPanel
            calculator={ <GBFCal /> }
            guide={ <GBFGuide />}
        />
    )
}

export default GBF;