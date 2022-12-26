import React, { useEffect, useState } from 'react';
import { Row, Col, Container} from 'react-bootstrap';

const GBF = () => {
    //setting state for crystals, single tix, 10 tix values
    const [crystals, setCrystals] = useState('0');
    const [singleTickets, setSingleTickets] = useState('0');
    const [multiTickets, setMultiTickets] = useState('0');
    const [totalRolls, setTotalRolls] = useState('0');

    useEffect(() => {
        const total = ~~(
            (parseInt(crystals, 10) / 300)
            + parseInt(singleTickets, 10)
            + (parseInt(multiTickets, 10) * 10)
        );

        setTotalRolls(total.toString());
    })

    return (
        <>
        <Container >
        <Row>
            <Col>
                <label name="crystals" htmlFor="crystals">Crystals:</label>
                <input min="0" max="999999" step="50" type="number" id="currency" value={crystals} onChange={e => setCrystals(e.target.value)}></input>
            </Col>
            <Col>
                <label name="singleTickets" htmlFor="singleTickets">1x tickets:</label>
                <input min="0" max="999999" type="number" id="ticket" value={singleTickets} onChange={e => setSingleTickets(e.target.value)}></input>
            </Col>
            <Col>
                <label name="multiTickets" htmlFor="multiTickets">10x tickets:</label>
                <input min="0" max="999999" type="number" id="ticket" value={multiTickets} onChange={e => setMultiTickets(e.target.value)}></input>
            </Col>
        </Row>
        <Row>
            <Col>
                <label id="totalRolls" name="totalRolls" htmlFor="totalRolls">Total Rolls:</label>
                <input disabled min="0" max="999999" type="text" value={totalRolls + "/300"}></input>
            </Col>
        </Row>
        </Container>
        </>
    )
}

export default GBF;