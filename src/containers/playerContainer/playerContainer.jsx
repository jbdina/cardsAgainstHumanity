import React, { Component } from 'react';
import { GameContainer, ApiService } from '../index';

export default class PlayerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: '',
            currentPlayer: null,
            showOverview: false,
            pendingGames: [],
        };
    }

    handlePlayer = async () => {
        const { playerName } = this.state;

        if (!playerName) {
            alert('Bitte gib deinen Namen ein.');
            return;
        }

        let currentPlayer = null;
        const playerExists = await ApiService.checkPlayerExists(playerName);

        if (playerExists) {
            currentPlayer = { name: playerName };
        } else {
            const newPlayer = await ApiService.createPlayer(playerName);
            currentPlayer = newPlayer;
        }

        this.setState({ currentPlayer, showOverview: true });
        this.loadPendingGames();
    };

    loadPendingGames = async () => {
        try {
            const pendingGames = await ApiService.getPendingGames();
            this.setState({ pendingGames });
        } catch (error) {
            console.error(error);
            alert('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
        }
    };

    handleInputChange = (event) => {
        this.setState({ playerName: event.target.value });
    };

    render() {
        const { playerName, currentPlayer, showOverview, pendingGames } = this.state;

        if (currentPlayer && showOverview) {
            return <GameContainer currentPlayer={currentPlayer} pendingGames={pendingGames} />;
        }

        return (
            <div>
                <label>
                    Dein Name:
                    <input type="text" value={playerName} onChange={this.handleInputChange} />
                </label>
                <button onClick={this.handlePlayer}>Spielsuche</button>
            </div>
            

        );
    }
}
