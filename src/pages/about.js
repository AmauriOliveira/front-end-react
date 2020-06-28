import React from 'react';
import { Link } from 'react-router-dom';

import Layout from "../components/Layout";

const AboutPage = () => (
    <Layout>
        <h1>About</h1>
        <ul>
            <li>
                <Link to="/" activeStyle={{ color: '#ff5555' }}>Home</Link>
            </li>
            <li>
                <Link to="/about" activeStyle={{ color: '#ff5555' }}>About</Link>
            </li>
        </ul>
    </Layout>
)
export default AboutPage;