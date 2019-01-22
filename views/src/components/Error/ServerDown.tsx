import React from 'react';

import './ServerDown.css';

export default function ServerDown() {
    return (
        <div id="serverdown">
            {/* This templates was made by Colorlib (https://colorlib.com)  */}
            <div className="serverdown">
                <div className="serverdown-503">
                    <h3>Server Unavailable</h3>
                    <h1><span>5</span><span>0</span><span>3</span></h1>
                </div>
                <h2>we are sorry, but the server is currently unavailable or under maintenance</h2>
            </div>
        </div>
    )
}