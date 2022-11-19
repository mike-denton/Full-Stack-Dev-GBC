import React from 'react';
import Button from 'react-bootstrap/Button'
import {Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="text-center">
                <h1>Welcome to GBC Chat</h1>
                <Button href="http://localhost:3001" variant="primary" size="lg">Join Chat</Button>{' '}
                <Link to="/eventlog"><Button variant="primary" size="lg">Manage Chat</Button></Link>
            </div>
        </>
    );
}

export default Home;