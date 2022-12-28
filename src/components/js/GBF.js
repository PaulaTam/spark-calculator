import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const GBF = () => {
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
        <>
        <Container >
            <Row xs="auto" md="3" lg="3">
                <Col>
                    <label className="no-wrap" name="crystals" htmlFor="crystals">Crystals:</label>
                    <input className="input-sm form-control" min="0" max="999999" step="50" type="number" id="currency" value={crystals} onChange={e => setCrystals(e.target.value)}></input>
                </Col>
                <Col>
                    <label className="no-wrap" name="singleTickets" htmlFor="singleTickets">1x tickets:</label>
                    <input className="input-sm form-control" min="0" max="999999" type="number" id="ticket" value={singleTickets} onChange={e => setSingleTickets(e.target.value)}></input>
                </Col>
                <Col>
                    <label className="no-wrap" name="multiTickets" htmlFor="multiTickets">10x tickets:</label>
                    <input className="input-sm form-control" min="0" max="999999" type="number" id="ticket" value={multiTickets} onChange={e => setMultiTickets(e.target.value)}></input>
                </Col>
            </Row>
            <Row  xs="auto" md="3" lg="3">
                <Col>
                    <label className="no-wrap" id="totalRolls" name="totalRolls" htmlFor="totalRolls">Total Rolls:</label>
                    <input disabled className="input-sm form-control" min="0" max="999999" type="text" value={totalRolls + "/300"}></input>
                </Col>
            </Row>
            <Row  xs="auto" md="3" lg="3">
                <Col>
                    <label className="no-wrap" name="ebifry" htmlFor="ebifry">Ebifry Count:</label>
                    <input className="input-sm form-control" min="0" max="999" type="number" id="ebifry" value={ebifry} onChange={e => setEbifry(e.target.value)}></input>
                </Col>
                <Col>
                    <label className="no-wrap" id="totalWithEbifry" htmlFor="totalWithEbifry">Total Rolls (with Ebifry):</label>
                    <input disabled className="input-sm form-control" min="0" max="999999" type="text" value={totalRolls + " + " + ebifry + " = " + totalWithEbifry + "/300"}></input>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default GBF;