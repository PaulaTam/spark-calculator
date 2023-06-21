import { FullPanel } from './Tabs';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/Backgrounds.css';

const ProSekaiCal = () => {
    //setting crystals and paidCrystals
    const [crystals, setCrystals] = useState('0');
    const [paidCrystals, setPaidCrystals] = useState('0');
    const [totalRolls, setTotalRolls] = useState('0');

    useEffect(() => {
        const total = ~~(
            (parseInt(crystals, 10) / 300)
            + (parseInt(paidCrystals, 10) / 300)
        );
        setTotalRolls(total.toString());
    }, [crystals, paidCrystals])

    //considering stickers
    const [stickers, setStickers] = useState('0');
    const [totalWithStickers, setTotalWithStickers] = useState('0');

    useEffect(() => {
        const total = (parseInt(totalRolls, 10) + 
            Math.min(Math.max((parseInt(stickers, 10)), 0), 10)*10
        );
        setTotalWithStickers(total.toString());
    }, [totalRolls, stickers])

    return (
        <>
        <div id="items">
            <Row xs="auto" md="4" lg="3">
                <Col>
                    <label name="crystals" htmlFor="crystals">Crystals:</label>
                    <input className="input-sm form-control" min="0" max="999999" step="50" type="number" id="currency" value={crystals} onChange={e => setCrystals(e.target.value)} />
                </Col>
                <Col>
                    <label name="paidCrystals" htmlFor="paidCrystals">Paid Crystals:</label>
                    <input className="input-sm form-control" min="0" max="999999" step="50" type="number" id="currency" value={paidCrystals} onChange={e => setPaidCrystals(e.target.value)} />
                </Col>
            </Row>
            <Row  xs="auto" md="4" lg="3">
                <Col>
                    <label id="totalRolls" name="totalRolls" htmlFor="totalRolls">Total Rolls:</label>
                    <input disabled className="input-sm form-control" min="0" max="999999" type="text" value={totalRolls + "/300"} />
                </Col>
            </Row>
            <hr />
            <Row id="extra">Total Rolls + Stickers (Max 10 stickers):</Row>
            <Row  xs="auto" md="4" lg="3">
                <Col>
                    <label name="stickers" htmlFor="stickers">Sticker Count:</label>
                    <input className="input-sm form-control" min="0" max="999" type="number" id="stickers" value={stickers} onChange={e => setStickers(e.target.value)} />
                </Col>
                <Col>
                    <label id="totalWithStickers" htmlFor="totalWithStickers">Total Rolls (with Stickers):</label>
                    <input disabled className="input-sm form-control" min="0" max="999999" type="text" value={totalWithStickers + "/300"} />
                </Col>
            </Row>
        </div>
        </>
    )

}

const ProSekaiGuide = () => {
    return (
        <>
        <div id="guide">
            <br />
            <h3>Intro</h3>
            <hr />
            <h4>Login</h4>
            <hr />
            <h4>Conversations</h4>
            <hr />
            <p>10 crystals per new conversation.</p>
            <h4>Challenge Shows</h4>
            <hr />
            <h4>Song Rewards</h4>
            <hr />
            <h4>Events</h4>
            <hr />
            <p>Each event will have an story, trade and aftershow.</p>
            <p>Story: usually 8 episodes, 50 crystals per episode.</p>
            <p>Trade: 1000 points for 100 crystals, 300 crystals total.</p>
            <p>Aftershow: 300 crystals if you watch the whole aftershow.</p>
            <h4>Monthly</h4>
            <hr />
        </div>
        </>
    )
}

const ProSekai = () => {

    useEffect(() => {
        document.body.className = "";
        document.body.classList.add('pjsekai_bg');
    }, []);

    return (
        <FullPanel
            calculator={ <ProSekaiCal /> }
            guide={ <ProSekaiGuide />}
        />
    )
}

export default ProSekai;