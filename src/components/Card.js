import React from 'react'
import '.././Card.css';

class Card extends React.Component {
    render() {
        // transform: translate(10px, 20px) rotate(20deg);
        let angle = Math.random() * 90 - 45;
        let xPos = Math.random() * 40 - 20;
        let yPos = Math.random() * 40 - 20;
        let transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`
        return (
      
            <img stlye={{transform: transform}} className="Card" src={this.props.image} alt={this.props.name} />         
      
        )
    }
}

export default Card
