import React from 'react';
import { useContent } from '../hooks';

export default function Browse() {
    // need series and films 
    const { series } = useContent('series');
    const { films } = useContent('films');
    // need slides
    // pass it to the browse container 

    return (<p>Hello from the browse!</p>);
}