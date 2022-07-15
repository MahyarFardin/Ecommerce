import React from 'react';
import { Link } from 'react-router-dom';

function MyLink({path, text}) {
    return (
        <Link to={`/${path}`} style={{ textDecoration: 'none', color: "#5F5449" }}>
            {text}
        </Link>
    );
}

export default MyLink;