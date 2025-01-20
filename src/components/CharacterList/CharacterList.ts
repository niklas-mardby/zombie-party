import "./CharacterList.scss";

const CharacterList = () => {
	const div = document.createElement("div");
	div.innerHTML = `test`;
	div.classList.add("CharacterList");
	return div;
};

export default CharacterList;
