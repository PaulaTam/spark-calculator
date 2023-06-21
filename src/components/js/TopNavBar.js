import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react'; //, { useState } from 'react';
//import { cardInfo } from './CardGrid.js';

/*
//current work in progress
export const SearchBar = () => {
    const [query, setQuery] = useState("");
    const { cards } = cardInfo;

    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
    };

    if (query.length > 0) {
        cards.filter((card) => {
            return card.name.match(query);
        });
    };
    
    return (
        <>
        <div class="search-box">
            <input type="text"
                placeholder="Search..."
                value={ query }
                onChange={ handleChange } />
        </div>
        </>);
}
*/

export const TopNavBar = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container fluid>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}