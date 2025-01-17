import "./ZombieList.scss";

const createZombieList = () => {
	const div = document.createElement("div");
	const ul = document.createElement("ul");
	const li = document.createElement("li");
	li.textContent = "zombie-list";
	ul.append(li);
	div.append(ul);
	div.classList.add("ZombieList");
	return div;
};

export default createZombieList;
