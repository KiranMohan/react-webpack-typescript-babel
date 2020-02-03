import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Counter } from './Counter';
import { Hello } from './Hello';

const App = () => (
    <>
        <Hello name="React + Typescript Start App"/>
        <Counter/>
    </>
);

export default hot(App);
