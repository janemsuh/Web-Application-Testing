import React, { useState } from 'react';
import Dashboard from './Dashboard';
import styled from 'styled-components';

const Screen = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Tracker = styled.div`
    text-align: left;
    padding-left: 20px;
    width: 100px;
`

export default function Display () {
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);
    const [hits, setHits] = useState(0);

    return (
        <div>
            <h1>At-Bat Tracker</h1>
            <Screen>
                <Dashboard
                    strikes={strikes}
                    setStrikes={setStrikes}
                    balls={balls}
                    setBalls={setBalls} 
                    hits={hits}
                    setHits={setHits}
                />
                <Tracker>
                    <h2>Ball {balls}</h2>
                    <h2>Strike {strikes}</h2>
                    <h2>Hits {hits}</h2>        
                </Tracker>
            </Screen>
        </div>
    )
}