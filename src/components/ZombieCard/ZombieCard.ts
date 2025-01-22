import { createDiv } from "../../helpers/helpers";
import { Zombie } from "../../types/zombies";
import "./ZombieCard.scss";

const createZombieCard = (z: Zombie) => {
	const div = createDiv("ZombieCard");

	div.innerHTML = `<h3>${z.name}</h3>`;

	return div;
};

export default createZombieCard;

// TODO: create this card (the above code is only placeholder stuff)
