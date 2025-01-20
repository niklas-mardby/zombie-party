import "./ZombieForm.scss";

const createZombieForm = () => {
	const div = document.createElement("div");
	div.innerHTML = `
        Name: <input type="text">
        Speed: <select>
            <option>a</option>
            <option>b</option>
            <option>c</option>
        </select>
        <button>Add</button>
    `;
	div.classList.add("ZombieForm");
	return div;
};

export default createZombieForm;
