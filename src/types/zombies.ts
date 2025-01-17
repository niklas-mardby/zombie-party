// här är alla typer som har med mina zombier att göra

import { DisneyCharacter } from "./disneyAPI";

export type ZombieSpeed = "slow" | "normal" | "fast";

export type Zombie = {
	name: string;
	speed: ZombieSpeed;
	favouriteDisneyCharacter: DisneyCharacter[];
};
