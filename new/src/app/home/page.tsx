import React from 'react';
import Nav from "../../../components/nav";

const HomePage = () => {
    return (
        <div style={{ backgroundColor: '1ea3cc', minHeight: '100vh' }}>
            <Nav />
            <h1>Welcome to the Home Page</h1>
            <p>Another component</p>
        </div>
    );
};

export default HomePage;