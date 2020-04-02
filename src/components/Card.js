import React from 'react'
import '.././Card.css';

class Card extends React.Component {
    render() {
        let angle = Math.random() * 90 - 45;
        let xPos = Math.random() * 40 - 20;
        let yPos = Math.random() * 40 - 20;
        const transform = `translate(${xPos}px ${yPos}px) rotate(${angle}deg)`; 
        return (
            <img className="Card" stlye={{transform: transform}} src={this.props.image} 
            alt={this.props.name}/>         
        )
    }
}

export default Card
