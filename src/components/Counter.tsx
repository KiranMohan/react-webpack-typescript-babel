import React, { Component } from 'react';

export interface CounterProps {
}

export interface CounterState {
    value: number;
}

export class Counter extends Component<CounterProps, CounterState> {
    readonly state: CounterState = { value: 0 };

    private handleIncrement = () => {
        const { value } = this.state;
        this.setState({ value: value + 1 });
    };

    private handleDecrement = () => {
        const { value } = this.state;
        this.setState({ value: value - 1 });
    };

    public render() {
        const { value } = this.state;
        return (
            <>
                <div>{value}</div>
                <button type="button" onClick={this.handleIncrement}>+</button>
                <button type="button" onClick={this.handleDecrement}>-</button>
            </>
        );
    }
}
