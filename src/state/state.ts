// här hanterar vi vårt globala state

import { DisneyCharacter } from "../types/disneyAPI";
import { Zombie } from "../types/zombies";

export const zombieState: Zombie[] = [
	{ name: "Bob", speed: "normal", favouriteDisneyCharacter: null },
	{ name: "Stina", speed: "fast", favouriteDisneyCharacter: null },
	{ name: "Kim", speed: "slow", favouriteDisneyCharacter: null },
];

export const addZombie = (z: Zombie) => {
	zombieState.push(z);
};

export const addFavouriteCharacter = (
	character: DisneyCharacter,
	zombieName: string
) => {
	zombieState.forEach((z) => {
		if (z.name === zombieName) z.favouriteDisneyCharacter = character;
	});
};
