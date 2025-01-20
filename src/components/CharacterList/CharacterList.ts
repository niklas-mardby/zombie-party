import { DisneyCharacter } from "../../types/disneyAPI";
import "./CharacterList.scss";

type CharacterList = {
	element: HTMLDivElement;
	render: () => void;
	characters: DisneyCharacter[];
};

const createCharacterList = () => {
	const div = document.createElement("div");
	div.innerHTML = `test`;
	div.classList.add("CharacterList");

	const renderCharList = () => {
		if (charList.characters) {
			div.innerHTML = `<h2>Search result:</h2>`;
			charList.characters.forEach((character) => {
				div.innerHTML += `<p>${character.name}</p>`;
			});
		}
	};

	const charList: CharacterList = {
		element: div,
		render: renderCharList,
		characters: [],
	};

	return charList;
};

export default createCharacterList;
