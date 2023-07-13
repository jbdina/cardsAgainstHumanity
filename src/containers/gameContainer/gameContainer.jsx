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
            currentGame: null, // Add currentGame state
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
    handleNewGame = async () => {
        const { currentPlayer } = this.props;

        try {
            // Create a new game using the API
            const newGame = await ApiService.createGame(currentPlayer.id);

            // Update the state with the new game data and show the lobby view
            this.setState({ currentGame: newGame, showLobby: true });
        } catch (error) {
            console.error('Error in handleNewGame:', error);
            alert('Ein Fehler ist aufgetreten. Bitte versuche es später erneut./handleNewGame');
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
                // Check if the current player is the owner of the game
                const isOwner = this.state.currentGame && this.state.currentGame.owner && this.state.currentGame.owner.id === currentPlayer.id;

                return (
                    <div>
                        {/* Render the lobby view */}
                        <h2>Lobby</h2>

                        {/* Display pending games and join/create game options */}
                        {this.state.currentGame && isOwner && (
                            <div>
                                <p>Du hast ein Spiel erstellt!</p>
                                <p>Warte auf mindestens zwei weitere Spieler, um das Spiel zu starten.</p>
                            </div>
                        )}

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
                        <button onClick={this.handleNewGame}>Spiel erstellen</button>

                    </div>
                );
            }
        }
    }
}
