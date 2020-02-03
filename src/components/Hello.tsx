import React from 'react';

export interface HelloProps {
    name: string;
}

export const Hello: React.FC<HelloProps> = ({ name }) => (
    <h1>{name}</h1>
);
