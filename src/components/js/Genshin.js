import { FullPanel } from './Tabs';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/Backgrounds.css';

const GenshinCal = () => {
    //setting primos, genesis crystals, and fates
    const [primos, setPrimos] = useState('0');
    const [genCrystals, setGenCrystals] = useState('0');
    const [inFates, setInFates] = useState('0');
    const [totalRolls, setTotalRolls] = useState('0');

    //this only calculates amount of rolls with intertwined fates, no aquaint
    useEffect(() => {
        const total = ~~(
            (parseInt(primos, 10) / 160)
            + (parseInt(genCrystals, 10) / 160)
            + parseInt(inFates, 10)
        );
        setTotalRolls(total.toString());
    }, [primos, genCrystals, inFates])

    const [dust, setDust] = useState('0');
    const [glitter, setGlitter] = useState('0');
    const [totalWithBargain, setTotalWithBargain] = useState('0');
    const [totalOverall, setTotalOverall] = useState('0');

    useEffect(() => {
        const total = ~~(
            Math.min(Math.max((parseInt(dust, 10 / 75)), 0), 5)
            + (parseInt(glitter, 10) / 5)
        );
        setTotalWithBargain(total.toString());
    }, [dust, glitter])

    useEffect(() => {
        const total = ~~(
            parseInt(totalRolls) + parseInt(totalWithBargain)
        );
        setTotalOverall(total.toString());
    }, [totalRolls, totalWithBargain])

    return (
        <div id="items">
            <Row xs="auto" md="4" lg="3">
                <Col>
                    <label name="primos" htmlFor="primos">Primogems:</label>
                    <input className="input-sm form-control" min="0" max="9999999" step="10" type="number" id="currency" value={primos} onChange={e => setPrimos(e.target.value)} />
                </Col>
                <Col>
                    <label name="genCrystals" htmlFor="genCrystals">Genesis Crystals:</label>
                    <input className="input-sm form-control" min="0" max="9999999" step="10" type="number" id="currency" value={genCrystals} onChange={e => setGenCrystals(e.target.value)} />
                </Col>
                <Col>
                    <label name="inFates" htmlFor="inFates">Intertwined Fates:</label> {/*add icon for intertwined fates here -> the rainbow-ish one*/}
                    <input className="input-sm form-control" min="0" max="999999" step="10" type="number" id="fate" value={inFates} onChange={e => setInFates(e.target.value)}></input>
                </Col>
            </Row>
            <Row xs="auto" md="4" lg="3">
                <Col>
                    <label id="totalRolls" name="totalRolls" htmlFor="totalRolls">Total Rolls:</label>
                    <input disabled className="input-sm form-control" min="0" max="999999" type="text" value={totalRolls + "/90"} />
                </Col>
            </Row>
            <hr />
            <Row id="extra">Total Rolls if you use up all your Stardust + Starglitter:</Row>
            <Row xs="auto" md="4" lg="3">
                <Col>
                    <label name="dust" htmlFor="dust">Stardust:</label>
                    <input className="input-sm form-control" min="0" max="9999999" step="10" type="number" id="shop" value={dust} onChange={e => setDust(e.target.value)} />
                </Col>
                <Col>
                    <label name="glitter" htmlFor="glitter">Starglitter:</label>
                    <input className="input-sm form-control" min="0" max="9999999" step="10" type="number" id="shop" value={glitter} onChange={e => setGlitter(e.target.value)} />
                </Col>
            </Row>
            <Row xs="auto" md="4" lg="3">
                <Col>
                    <label id="totalWithBargain" name="totalWithBargain" htmlFor="totalWithBargain">Total Rolls from shop:</label>
                    <input disabled className="input-sm form-control" min="0" max="999999" type="text" value={totalWithBargain} />
                </Col>
                <Col>
                    <label id="totalOverall" name="totalOverall" htmlFor="totalOverall">Total Rolls Overall:</label>
                    <input disabled className="input-sm form-control" min="0" max="999999" type="text" value={totalOverall} />
                </Col>
            </Row>
        </div>
    )
}

const GenshinGuide = () => {
    return (
        <div id="guide">
            <br />
            <h3>Intro</h3>
            <hr />
            <p>This guide will focus on F2P {"(free to play)"} methods to obtaining primogems and fates.</p>
            <h4>Dailies</h4>
            <hr />
            <p>10 per daily quest.</p>
            <p>20 when turning in the 4 daily quests to any Katherine.</p>
            <p>Total 60 possible primogems per day.</p>
            <h4>Chests</h4>
            <hr />
            <p>There are 4 tiers of chests in Genshin, and they each give a different amount of primogems when opened.</p>
            <ul>
                <li>Common Chests: Gives about 0-2 primogems per chest.</li>
                <li>Exquisite Chests: Gives about 2-5 primogems per chest.</li>
                <li>Precious Chests: Gives about 5-10 primogems per chest.</li>
                <li>Luxurious Chests: Gives 10 primogems per chest.</li>
            </ul>
            <h4>Shrine of Depths</h4>
            <hr />
            <p>Each Shrine of Depth has a chest inside that gives 40 primogems.</p>
            <h4>Spiral Abyss</h4>
            <hr />
            <h4>Events</h4>
            <hr />
            <h4>First Time Tutorials</h4>
            <hr />
            <p>1 primogem when you view new tutorial.</p>
        </div>
    )
}

const Genshin = () => {

    useEffect(() => {
        document.body.classList.add('genshin_bg');
    }, []);

    return (
        <FullPanel
            calculator={ <GenshinCal /> }
            guide={ <GenshinGuide />}
        />
    )
}

export default Genshin;