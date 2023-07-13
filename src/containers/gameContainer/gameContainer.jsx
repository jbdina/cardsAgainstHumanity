import React, { Component } from 'react';
import  ApiService  from '../APIService';

export default class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            showLobby: false,
        };
    }

    handleGameStart = () => {
        const { currentPlayer } = this.props;

        // Check game states and start the game if conditions are met
        const ownedGame = currentPlayer.getOwnedGame();
        ownedGame.players = ApiService.getPlayers();

        if (ownedGame && ownedGame.players.length >= 3) {
            // Start the game
            ownedGame.start();
            this.setState({ running: true });
        }else{
            alert('Du brauchst mindestens 3 Mitspieler, um das Spiel starten zu können.');
                //return;
        }
    };

    handleOverview=  () =>{
        const { pendingGames } = this.props;

        if (pendingGames && pendingGames.length > 0) {
            // display the pending games in a grid
            return (
                <div className="grid-container">
                    {pendingGames.map(game => (
                        <div className="grid-item" key={game.id}>
                            {game.name} ({game.players.length} Spieler)
                        </div>
                    ))}
                </div>
            );
        } else {
            // display a message saying that there are no games waiting for a player
            return <div>Es gibt derzeit keine Spiele, die auf einen Spieler warten.</div>;
        }

    };

    render() {
        const {currentPlayer, showOverview} = this.props;
        const {running, showLobby} = this.state;
        if (showOverview === true) {
            if (running) {
                return (
                    <div>
                        {/* Render the game view for the current player */}
                    </div>
                );
            }
            if (showLobby === true) {
                return (
                    <div>
                        {/* Render the lobby view */}
                        <h2>Lobby</h2>
                        {/* Display pending games and join/create game options */}
                        {/* Implement the logic to join or create games */}
                        <button onClick={this.handleGameStart}>Start Game</button>
                    </div>
                );
            } else {
                return (
                    <div>
                        {/* Render the game overview */}
                        {this.handleOverview()}
                        {/* Add a "Neues Spiel starten" button */}
                        <button onClick={() => {
                            // add code here to handle starting a new game
                        }}>Neues Spiel erstellen
                        </button>
                    </div>
                );
            }
        }
    }
}
