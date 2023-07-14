import React, {Component} from 'react';
import {ApiService, GameContainer} from '../index';
import './playerContainer.css';

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
            alert('Please enter your name.');
            return;
        }

        try {
            const playerExists = await ApiService.checkPlayerExists(playerName);

            if (playerExists) {
                const currentPlayer = { name: playerName };
                this.setState({ currentPlayer, showOverview: true });

                const pendingGames = await ApiService.getPendingGames();
                this.setState({ pendingGames });

                // Perform any additional operations after setting the state
                // ...
            } else {
                const newPlayer = await ApiService.createPlayer(playerName);
                const currentPlayer = newPlayer;
                this.setState({ currentPlayer, showOverview: true });

                const pendingGames = await ApiService.getPendingGames();
                this.setState({ pendingGames });

                // Perform any additional operations after setting the state
                // ...
            }
        } catch (error) {
            console.error('Error in handlePlayer:', error);
            alert('Error Occured./handlePlayer');
        }
    };



    handleInputChange = (event) => {
        this.setState({ playerName: event.target.value });
    };

    handleDeletePlayers = () => {
        ApiService.deletePlayersByName('29');
        ApiService.deletePlayersByName('28');
        ApiService.deletePlayersByName('27');
        ApiService.deletePlayersByName('26');
        ApiService.deletePlayersByName('25');
        ApiService.deletePlayersByName('24');
        ApiService.deletePlayersByName('23');
        ApiService.deletePlayersByName('22');
        ApiService.deletePlayersByName('21');
        ApiService.deletePlayersByName('20');
        ApiService.deletePlayersByName('19');
        ApiService.deletePlayersByName('18');
        ApiService.deletePlayersByName('17');
        ApiService.deletePlayersByName('16');
        ApiService.deletePlayersByName('15');
        ApiService.deletePlayersByName('14');
        ApiService.deletePlayersByName('13');
        ApiService.deletePlayersByName('12');
        ApiService.deletePlayersByName('11');
        ApiService.deletePlayersByName('10');
        ApiService.deletePlayersByName('9');
        ApiService.deletePlayersByName('8');
        ApiService.deletePlayersByName('7');
        ApiService.deletePlayersByName('6');
        ApiService.deletePlayersByName('5');
        ApiService.deletePlayersByName('4');
        ApiService.deletePlayersByName('3');
        ApiService.deletePlayersByName('2');
        ApiService.deletePlayersByName('1');
        ApiService.deletePlayersByName('0');

    };
    handleDeleteGames = () => {
        ApiService.deleteGame('29');
        ApiService.deleteGame('28');
        ApiService.deleteGame('27');
        ApiService.deleteGame('26');
        ApiService.deleteGame('25');
        ApiService.deleteGame('24');
        ApiService.deleteGame('23');
        ApiService.deleteGame('22');
        ApiService.deleteGame('21');
        ApiService.deleteGame('20');
        ApiService.deleteGame('19');
        ApiService.deleteGame('18');
        ApiService.deleteGame('17');
        ApiService.deleteGame('16');
        ApiService.deleteGame('15');
        ApiService.deleteGame('14');
        ApiService.deleteGame('13');
        ApiService.deleteGame('12');
        ApiService.deleteGame('11');
        ApiService.deleteGame('10');
        ApiService.deleteGame('9');
        ApiService.deleteGame('8');
        ApiService.deleteGame('7');
        ApiService.deleteGame('6');
        ApiService.deleteGame('5');
        ApiService.deleteGame('4');
        ApiService.deleteGame('3');
        ApiService.deleteGame('2');
        ApiService.deleteGame('1');
        ApiService.deleteGame('0');

    };
    render() {

        const { playerName, currentPlayer, showOverview, pendingGames } = this.state;

        if (currentPlayer && showOverview) {
            return <GameContainer currentPlayer={currentPlayer}  showOverview={showOverview} pendingGames={pendingGames} />;
        }

        return (

            <div className="player-container full-height" id={"player-container"}>
                <label >
                    Enter your Name :
                    <input type="text" value={playerName} onChange={this.handleInputChange} />
                </label>
                <button className={`button-glow`} onClick={this.handlePlayer}>
                    Search Game
                </button>

                <button /*zum Testen exklusiv*/ onClick={this.handleDeletePlayers}>delete player</button>
                <button /*zum Testen exklusiv*/ onClick={this.handleDeleteGames}>delete game</button>
            </div>


        );
    }
}
