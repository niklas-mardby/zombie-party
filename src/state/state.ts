// här hanterar vi vårt globala state

import { DisneyCharacter } from "../types/disneyAPI";
import { Zombie } from "../types/zombies";
import { emptyZombie } from "../utils/zombieUtils";

export const zombieState: Zombie[] = [
	{
		name: "Bob",
		speed: "normal",
		chosen: true,
		favouriteDisneyCharacter: [],
	},
	{
		name: "Stina",
		speed: "fast",
		chosen: false,
		favouriteDisneyCharacter: [],
	},
	{
		name: "Kim",
		speed: "slow",
		chosen: false,
		favouriteDisneyCharacter: [],
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
		if (z.name === zombieName) z.favouriteDisneyCharacter.push(character);
	});
};

export const unchooseZombies = () => {
	zombieState.forEach((z) => {
		z.chosen = false;
	});
};

export const getChosenZombie = () => {
	let chosenZombie: Zombie = emptyZombie();

	zombieState.forEach((z) => {
		if (z.chosen) chosenZombie = z;
	});
	return chosenZombie;
};
