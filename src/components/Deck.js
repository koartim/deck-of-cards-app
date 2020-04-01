import React from 'react'
import axios from 'axios';
import Card from './Card';
import '.././Card.css';
import '.././Deck.css';
const BASE_API = "https://deckofcardsapi.com/api/deck";

class Deck extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {deck: null};
    //     this.getCard = this.getCard.bind(this);
    // }

    state = {
        deck: null, 
        drawn: []
    }
   async componentDidMount() {
    let deck = await axios.get(`${BASE_API}/new/shuffle/`);
    this.setState({deck: deck.data})
    }

     getCard = async () => {
        let id = this.state.deck.deck_id;
        try {
        let cardUrl = `${BASE_API}/${id}/draw/`;
        let cardRsp = await axios.get(cardUrl);
        if (!cardRsp.data.success) {
            throw new Error("No cards remaining")
        }     
        let card = cardRsp.data.cards[0];
        this.setState(state => ({
            drawn: [
                ...state.drawn, {
                    id: card.code, 
                    image: card.image, 
                    name: `${card.value} of ${card.suit}`}
            ]
        }), console.log(card))
      } catch(err) {
          alert(err);
      }
    }

    render() {
        const cards = this.state.drawn.map(card => (
            <Card name={card.name} image={card.image} key={card.id}/>
        ))
        return (
            <div>
                <h1>Card Dealer</h1>
                <button onClick={this.getCard}>Get Card</button>
                <div className="Deck-cardarea">
                {cards}
                </div>
                
            </div>
        )
    }
}

export default Deck
