import React from 'react'
import axios from 'axios';
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
        let cardUrl = `${BASE_API}/${id}/draw/`;
        let cardRsp = await axios.get(cardUrl);
        console.log(cardRsp);
        let card = cardRsp.data.cards[0];
        this.setState(state => ({
            drawn: [
                ...state.drawn, {
                    id: card.code, 
                    image: card.image, 
                    name: `${card.suit} ${card.value}`}
            ]
        }))
    }

    render() {
        return (
            <div>
                <h1>Card Dealer</h1>
                <button onClick={this.getCard}>Get Card</button>
            </div>
        )
    }
}

export default Deck
