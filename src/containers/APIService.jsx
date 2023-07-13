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
            throw new Error('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
        }
    }

    // Checks if a player exists
    async checkPlayerExists(playerName) {
        try {
            const response = await fetch(`${this.BASE_URL}/players/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const players = await response.json();
                return players.some((player) => player.name === playerName);
            } else {
                throw new Error('Fehler beim Überprüfen des Spielers.');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
        }
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
            throw new Error('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
        }
    }
}export default new ApiService();
