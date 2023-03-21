import { FullPanel } from './Tabs';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

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
            Math.min(Math.max((parseInt(stickers, 10)), 0), 10)
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
            <p>This is a placeholder!</p>
        </div>
        </>
    )
}

const ProSekai = () => {
    return (
        <FullPanel
            calculator={ <ProSekaiCal /> }
            guide={ <ProSekaiGuide />}
        />
    )
}

export default ProSekai;