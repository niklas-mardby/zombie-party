// här hanterar vi vårt globala state

import { DisneyCharacter } from "../types/disneyAPI";
import { Zombie } from "../types/zombies";

export const zombieState: Zombie[] = [
	{
		name: "Bob",
		speed: "normal",
		chosen: false,
		favouriteDisneyCharacter: null,
	},
	{
		name: "Stina",
		speed: "fast",
		chosen: false,
		favouriteDisneyCharacter: null,
	},
	{
		name: "Kim",
		speed: "slow",
		chosen: false,
		favouriteDisneyCharacter: null,
	},
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

export const unchooseZombies = () => {
	zombieState.forEach((z) => {
		z.chosen = false;
	});
};
