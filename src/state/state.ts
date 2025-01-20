// här hanterar vi vårt globala state

import { Zombie } from "../types/zombies";

export const zombieState: Zombie[] = [
	{ name: "Bob", speed: "normal", favouriteDisneyCharacter: null },
	{ name: "Stina", speed: "fast", favouriteDisneyCharacter: null },
	{ name: "Kim", speed: "slow", favouriteDisneyCharacter: null },
];

export const addZombie = (z: Zombie) => {
	zombieState.push(z);
};

// export const addFavouriteCharacter = (
// 	characterName: string,
// 	zombieName: string
// ) => {};
