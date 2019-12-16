import React from 'react';
import styled from 'styled-components';

const Record = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1%;
`

const Play = styled.button`
    width: 100px;
    height: 25px;
    margin: 3%;
`

export default function Dashboard ({ setStrikes, strikes, balls, setBalls, hits, setHits }) {
    
    return (
        <Record>
            <Play onClick={() => strikes < 2 ? setStrikes(strikes + 1) : setStrikes(0) & setBalls(0)}>Strike</Play>
            <Play onClick={() => balls < 3 ? setBalls(balls + 1) : setBalls(0) & setStrikes(0)}>Ball</Play>
            <Play onClick={() => strikes < 2 ? setStrikes(strikes + 1) : setStrikes(strikes)}>Foul</Play>
            <Play onClick={() => setStrikes(0) & setBalls(0) & setHits(hits + 1)}>Hit</Play>
            <Play onClick={() => setBalls(0) & setStrikes(0) & setHits(0)}>Reset Game</Play>
        </Record>
    )
}