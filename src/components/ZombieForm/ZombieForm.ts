import { speeds } from "../../constants/constants";
import { addZombie } from "../../state/state";
import { ZombieSpeed } from "../../types/zombies";
import { renderZombieList } from "../ZombieList/ZombieList";
import "./ZombieForm.scss";

const createZombieForm = () => {
	const div = document.createElement("div");
	div.innerHTML = `<h1>Add zombie</h1>`;
	const zombieName = document.createElement("input");
	zombieName.type = "text";
	div.append("Name: ", zombieName);

	const zombieSpeed = document.createElement("select");
	zombieSpeed.innerHTML = Object.keys(speeds)
		.map((s) => `<option>${s}</option>`)
		.join();
	div.append(" Speed: ", zombieSpeed);

	const button = document.createElement("button");
	button.innerText = "Add";
	button.addEventListener("click", () => {
		console.log(zombieName.value);
		console.log(zombieSpeed.value);

		addZombie({
			name: zombieName.value,
			speed: zombieSpeed.value as ZombieSpeed,
			chosen: false,
			favouriteDisneyCharacter: null,
		});
		renderZombieList();
	});
	div.append(button);
	div.classList.add("ZombieForm");
	return div;
};

export default createZombieForm;
