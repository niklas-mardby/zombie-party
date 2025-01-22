import { createDiv } from "../../helpers/helpers";
import { getChosenZombie } from "../../state/state";
import { Zombie } from "../../types/zombies";
import "./ZombieCard.scss";

const createZombieCard = (z: Zombie | null) => {
	if (!z) {
		z = getChosenZombie();
	}

	const div = createDiv("ZombieCard");

	div.innerHTML = `
		<h3>Name: ${z.name}</h3>
		<p>Speed: ${z.name === "-" ? "-" : z.speed}</p>`;
	// TODO: visa upp favorit-disney-karaktär också

	return div;
};

export default createZombieCard;

export const renderZombieCard = (z: Zombie) => {
	const div = document.querySelector(".ZombieCard") as HTMLDivElement;

	if (div) {
		const p = div.parentElement as HTMLDivElement;
		p.replaceChild(createZombieCard(z), div);
	}
};
