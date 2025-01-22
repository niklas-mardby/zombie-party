import { createDiv } from "../../helpers/helpers";
import { unchooseZombies, zombieState } from "../../state/state";
import { Zombie } from "../../types/zombies";
import { emptyZombie } from "../../utils/zombieUtils";
import createZombieCard, { renderZombieCard } from "../ZombieCard/ZombieCard";
import "./ZombieList.scss";

const createZombieList = () => {
	const wrapper = createDiv("zombieWrapper");

	const div = document.createElement("div");
	div.innerHTML = `<h1>Choose Zombie</h1>`;
	const ul = document.createElement("ul");

	let z: Zombie = emptyZombie();

	zombieState.forEach((zombie) => {
		const li = document.createElement("li");
		li.innerHTML = `<label><input type="radio" name="chosen" ${
			zombie.chosen ? "checked" : ""
		}/>${zombie.name}</label>`;

		li.addEventListener("click", () => {
			unchooseZombies();
			zombie.chosen = true;
			renderZombieCard(zombie);
		});

		ul.append(li);
	});

	div.append(ul);
	div.classList.add("ZombieList");

	wrapper.append(div);

	const zCard = document.querySelector(".ZombieCard") as HTMLDivElement;
	if (zCard) {
		const p = zCard.parentElement as HTMLDivElement;
		p.replaceChild(createZombieCard(null), zCard);
	} else {
		const zombieCard = createZombieCard(z);
		wrapper.append(zombieCard);
	}

	return wrapper;
};

export default createZombieList;

export const renderZombieList = () => {
	const zList = document.querySelector(".ZombieList") as HTMLDivElement;

	if (zList) {
		const p = zList.parentElement as HTMLDivElement;
		p.replaceChild(createZombieList(), zList);
	}
};
