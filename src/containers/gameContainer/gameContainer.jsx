import React, { Component } from 'react'
export default class GameContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            players: [],
            running: false,
            playerName: '',
            currentPlayer: null,
            isLoading: false
        };
    }

    handleStartGame = async () => {
        const { playerName } = this.state;

        if (!playerName) {
            alert('Bitte gib deinen Namen ein.');
            return;
        }

        // Überprüfe, ob der Spieler bereits existiert
        const playerExists = await this.checkPlayerExists(playerName);

        if (playerExists) {
            // Spieler existiert bereits, wähle ihn aus
            const currentPlayer = this.state.players.find(player => player.name === playerName);
            this.setState({ currentPlayer });
        } else {
            // Spieler existiert nicht, erstelle ihn
            const newPlayer = await this.createPlayer(playerName);
            this.setState({ currentPlayer: newPlayer });
        }

        this.setState({ running: true });
    };

    checkPlayerExists = async (playerName) => {
        try {
            const response = await fetch('https://gruppe16.toni-barth.com/players/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const players = await response.json();
                return players.some(player => player.name === playerName);
            } else {
                throw new Error('Fehler beim Abrufen der Spielerdaten.');
            }
        } catch (error) {
            console.error(error);
            alert('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
            return false;
        }
    };

    createPlayer = async (playerName) => {
        try {
            const response = await fetch('https://gruppe16.toni-barth.com/players/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: playerName })
            });

            if (response.ok) {
                const newPlayer = await response.json();
                return newPlayer;
            } else {
                throw new Error('Fehler beim Erstellen des Spielers.');
            }
        } catch (error) {
            console.error(error);
            alert('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
            return null;
        }
    };

    handleInputChange = (event) => {
        this.setState({ playerName: event.target.value });
    };

    render() {
        const { running, playerName, currentPlayer, isLoading } = this.state;

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (running && currentPlayer) {
            return (
                <div>
                    {/* Hier wird der Spielverlauf für den aktuellen Spieler angezeigt */}
                </div>
            );
        }

        return (
            <div>
                <label>
                    Dein Name:
                    <input type="text" value={playerName} onChange={this.handleInputChange} />
                </label>
                <button onClick={this.handleStartGame}>Spielsuche</button>
            </div>
        );
    }
}