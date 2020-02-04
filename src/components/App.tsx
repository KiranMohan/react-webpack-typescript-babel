import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Hello } from './Hello';

const App = () => (
    <div id="container">
        <div id="header">
            <Hello name="React + Typescript Start App"/>
        </div>

        <div id="content">
            {
                Array.from(
                    { length: 20 },
                    (_, k) => (<p key={k}>{k}</p>),
                )
            }
        </div>

        <div id="footer">
            <span>
                <b>Footer</b>
                {' '}
                Fixed Height
            </span>
        </div>
    </div>
);

export default hot(App);
