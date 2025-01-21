import { speeds } from "../../constants/constants";
import "./ZombieForm.scss";

const createZombieForm = () => {
	const div = document.createElement("div");
	div.innerHTML = `
        <h1>Add zombie</h1>
        Name: <input type="text">
        Speed: <select>${Object.keys(speeds).map(
				(x) => `<option>${x}</option>`
			)}
        </select>
        <button>Add</button>
    `;
	div.classList.add("ZombieForm");
	return div;
};

export default createZombieForm;
