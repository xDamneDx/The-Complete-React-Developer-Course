import React from 'react';

const PortfolioItemPage = (props) => (
    <div>
        <h2>A Thing I've Done</h2>
        <p>This page is for the item with id of {props.match.params.id}</p>
    </div>
)

export default PortfolioItemPage;
