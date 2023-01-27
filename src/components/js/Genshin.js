import { FullPanel } from './Tabs.js';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

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
        <>
            <p>This is a placeholder!</p>
        </>
    )
}

const Genshin = () => {
    return (
        <FullPanel
            calculator={ <GenshinCal /> }
            guide={ <GenshinGuide />}
        />
    )
}

export default Genshin;