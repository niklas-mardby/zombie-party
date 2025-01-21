import { unchooseZombies, zombieState } from "../../state/state";
import "./ZombieList.scss";

const createZombieList = () => {
	const div = document.createElement("div");
	div.innerHTML = `<h1>Choose Zombie</h1>`;
	const ul = document.createElement("ul");

	zombieState.forEach((zombie) => {
		const li = document.createElement("li");
		li.innerHTML = `<label><input type="radio" name="chosen" ${
			zombie.chosen ? "checked" : ""
		}/>${zombie.name}</label>`;

		li.addEventListener("click", () => {
			unchooseZombies();
			zombie.chosen = true;
		});

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
