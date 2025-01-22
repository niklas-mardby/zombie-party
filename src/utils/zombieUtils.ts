import { Zombie } from "../types/zombies";

export const emptyZombie = () => {
	const z: Zombie = {
		name: "-",
		speed: "slow",
		favouriteDisneyCharacter: null,
		chosen: false,
	};
	return z;
};
