import React, { Component } from 'react';
import CardFront from 'CardFront'
import CardBack from 'CardBack'

export default class CharCard extends Component {
    render() {
        return (
            <div className={'character-card'}>

            <CardBack />
            <CardFront />

            </div >
        )
    }
}