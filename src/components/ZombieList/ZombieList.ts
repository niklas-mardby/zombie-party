import { zombieState } from "../../state/state";
import "./ZombieList.scss";

const createZombieList = () => {
	const div = document.createElement("div");
	div.innerHTML = `<h1>Zombies</h1>`;
	const ul = document.createElement("ul");

	zombieState.forEach((zombie) => {
		const li = document.createElement("li");
		li.textContent = zombie.name;
		ul.append(li);
	});

	div.append(ul);
	div.classList.add("ZombieList");
	return div;
};

export default createZombieList;

export const renderZombieList = () => {
	const div = document.querySelector(".ZombieList") as HTMLDivElement;

	if (div) {
		div.remove();
		createZombieList();
	}
};
