import React, { Component } from 'react';
import  ApiService  from '../APIService';
import './gameContainer.css';

export default class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            showLobby: false,
            selectedGameId: null, // Track the selected game ID
        };
    }
    handleJoinGame = (gameId) => {
        // Handle the logic to join the game using the game ID
        // You can make an API call or update the state accordingly
        // For simplicity, let's just set the selectedGameId in the state for now
        this.setState({ selectedGameId: gameId });
    };
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

    handleOverview = () => {
        const { pendingGames } = this.props;
        const { selectedGameId } = this.state;

        if (pendingGames && pendingGames.length > 0) {
            // Display the pending games in a grid
            return (
                <div className="grid-container">
                    {pendingGames.map((game) => (
                        <div
                            className={`grid-item ${selectedGameId === game.id ? 'selected' : ''}`}
                            key={game.id}
                            onClick={() => this.handleJoinGame(game.id)}
                        >
                            <div className="game-info">
                                <div>{game.name}</div>
                                <div>({game.players.length} Spieler)</div>
                                <div className="waiting-message">Wartet auf Mitspieler</div>
                            </div>
                        </div>
                    ))}
                </div>

            );
        } else {
            // Display a message saying that there are no games waiting for a player
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
