import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h2>My Work</h2>
        <p>Checkout the following things i've done:</p>
        <Link to="/portfolio/1">ItemOne</Link>
        <Link to="/portfolio/2">ItemTwo</Link>
    </div>
);

export default PortfolioPage;
