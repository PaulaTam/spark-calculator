import { FullPanel } from './Tabs';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/Backgrounds.css';

const HSRCal = () => {
    //setting primos, genesis crystals, and fates
    const [jades, setJades] = useState('0');
    const [oneiricShards, setOneiricShards] = useState('0');
    const [goldTix, setGoldTix] = useState('0');
    const [totalRolls, setTotalRolls] = useState('0');

    //this only calculates amount of rolls with intertwined fates, no aquaint
    useEffect(() => {
        const total = ~~(
            (parseInt(jades, 10) / 160)
            + (parseInt(oneiricShards, 10) / 160)
            + parseInt(goldTix, 10)
        );
        setTotalRolls(total.toString());
    }, [jades, oneiricShards, goldTix])

    const [embers, setEmbers] = useState('0');
    const [starlight, setStarlight] = useState('0');
    const [totalWithBargain, setTotalWithBargain] = useState('0');
    const [totalOverall, setTotalOverall] = useState('0');

    useEffect(() => {
        const total = ~~(
            Math.min(Math.max((parseInt(embers, 10 / 75)), 0), 5)
            + (parseInt(starlight, 10) / 20)
        );
        setTotalWithBargain(total.toString());
    }, [embers, starlight])

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
                    <label name="jades" htmlFor="jades">Stellar Jades:</label>
                    <input className="input-sm form-control" min="0" max="9999999" step="10" type="number" id="currency" value={jades} onChange={e => setJades(e.target.value)} />
                </Col>
                <Col>
                    <label name="oneiricShards" htmlFor="oneiricShards">Oneiric Shards:</label>
                    <input className="input-sm form-control" min="0" max="9999999" step="10" type="number" id="currency" value={oneiricShards} onChange={e => setOneiricShards(e.target.value)} />
                </Col>
                <Col>
                    <label name="goldTix" htmlFor="goldTix">Gold Tickets:</label>
                    <input className="input-sm form-control" min="0" max="999999" step="10" type="number" id="ticket" value={goldTix} onChange={e => setGoldTix(e.target.value)}></input>
                </Col>
            </Row>
            <Row xs="auto" md="4" lg="3">
                <Col>
                    <label id="totalRolls" name="totalRolls" htmlFor="totalRolls">Total Rolls:</label>
                    <input disabled className="input-sm form-control" min="0" max="999999" type="text" value={totalRolls + "/90"} />
                </Col>
            </Row>
            <hr />
            <Row id="extra">Total Rolls if you use up all your Starlight + Embers:</Row>
            <Row xs="auto" md="4" lg="3">
                <Col>
                    <label name="embers" htmlFor="embers">Embers:</label>
                    <input className="input-sm form-control" min="0" max="9999999" step="10" type="number" id="shop" value={embers} onChange={e => setEmbers(e.target.value)} />
                </Col>
                <Col>
                    <label name="starlight" htmlFor="starlight">Starlight:</label>
                    <input className="input-sm form-control" min="0" max="9999999" step="10" type="number" id="shop" value={starlight} onChange={e => setStarlight(e.target.value)} />
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

const HSRGuide = () => {
    return (
        <div id="guide"></div>
    )
}

const HSR = () => {

    useEffect(() => {
        document.body.className = "";
        document.body.classList.add('hsr_bg');
    }, []);

    return (
        <FullPanel
            calculator={ <HSRCal /> }
            guide={ <HSRGuide />}
        />
    )
}

export default HSR;