// här är alla typer som har med mina zombier att göra

import { DisneyCharacter } from "./disneyAPI";
import { speeds } from "../constants/constants";

export type ZombieSpeed = keyof typeof speeds;

export type Zombie = {
	name: string;
	speed: ZombieSpeed;
	chosen: boolean;
	favouriteDisneyCharacter: DisneyCharacter[];
};
