class ApiService {
    BASE_URL = 'https://gruppe16.toni-barth.com';

    // Fetches a list of pending games
    async getPendingGames() {
        try {
            const response = await fetch(`${this.BASE_URL}/games/`);
            if (response.ok) {
                const datapen = await response.json();
                return datapen.games;
            } else {
                throw new Error('Fehler beim Abrufen der ausstehenden Spiele.');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Ein Fehler ist aufgetreten. Bitte versuche es später erneut./pendingGames');
        }
    }
// Creates a new game
    async createGame(ownerId) {
        try {
            const response = await fetch(`${this.BASE_URL}/games/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ owner: ownerId }),
            });

            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                throw new Error('Fehler beim Erstellen des Spiels.');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Ein Fehler ist aufgetreten. Bitte versuche es später erneut./createGame');
        }
    }
    // Checks if a player exists
    async checkPlayerExists(playerName) {
        try {
            console.log('checkPlayerExists playerName:', playerName);
            console.log('BASE_URL:', this.BASE_URL);

            const response = await fetch(`${this.BASE_URL}/players/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('response:', response);

            if (!response.ok) {
                throw new Error('Fehler beim Abrufen der Spieler.');
            }

            const playersData = await response.json();
            console.log('playersData:', playersData);

            if (!playersData || !Array.isArray(playersData.players)) {
                throw new Error('Ungültiges Datenformat für Spielerdaten.');
            }

            const playerExists = playersData.players.some(
                (player) => player.name.toLowerCase() === playerName.toLowerCase()
            );
            console.log('playerExists:', playerExists);

            return playerExists;
        } catch (error) {
            console.error('Error in checkPlayerExists:', error);
            throw new Error('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
        }
        //debugging:With the updated code, we added checks to ensure that the playersData object exists and that the playersData.players value is an array before attempting to call the some method on it. If the checks fail, an error is thrown, indicating that the response data is in an invalid format.
    }








    // Creates a new player
    async createPlayer(playerName) {
        try {
            const response = await fetch(`${this.BASE_URL}/players/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name: playerName}),
            });

            if (response.ok) {
                const datacreate = await response.json();
                return datacreate;
            } else {
                throw new Error('Fehler beim Erstellen des Spielers.');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Ein Fehler ist aufgetreten. Bitte versuche es später erneut./createPlayer');
        }
    }

    async getPlayers(gameId) {
        try {
            const response = await fetch(`${this.BASE_URL}/game/${gameId}/players/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            return data.length;
        } catch (error) {
            console.error(error);
            throw new Error('Ein Fehler ist aufgetreten. Bitte versuche es später erneut./getPlayer');
        }
    }
    //Zum Testen
    async deleteGame(gameId){
        try{
            //delete game with id
            const response = await fetch(`${this.BASE_URL}/games/${gameId}/`,{
                method:'DELETE',
                headers:{
                    'Content-Type' : 'application/json',
                },
            });

        }catch (e) {
                throw new Error('Error /deletegame');
        }
    }
    //zum Testen
    async deletePlayersByName(playerId) {
        try {
            // get all players
            const response = await fetch(`${this.BASE_URL}/players/${playerId}/`, {
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
               /* const data = await response.json();
                const players = data.players;

                // find players with the given name
                const playersToDelete = players.filter(player => player.id === playerId);

                // delete each player
                for (const player of playersToDelete) {
                    await this.deletePlayer(player.id);*/
                return;
            } else {
                throw new Error('Error /delete Player.');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
        }
    }
}export default new ApiService();
