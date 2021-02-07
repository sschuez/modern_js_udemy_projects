class GitHub {
	constructor(){
		this.client_id = '84d0bfabd0e52fda917b';
		this.client_secret = 'e7af133fc2c1aea4acd8b0a5e21cdeab2b085bdf'
	}

	async getUser(user){
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();

		return {
			profile
		}
	}
}