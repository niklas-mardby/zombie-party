import { DisneyCharacter } from "../../types/disneyAPI";
import createCharacterCard from "../CharacterCard/CharacterCard";
import "./CharacterList.scss";

type CharacterList = {
	element: HTMLDivElement;
	render: () => void;
	showLoader: () => void;
	characters: DisneyCharacter[];
};

const createCharacterList = () => {
	const div = document.createElement("div");
	div.classList.add("CharacterList");

	const renderCharList = () => {
		if (charList.characters) {
			div.innerHTML = `<h2>Search result:</h2>`;
			const wrapper = document.createElement("div");
			div.appendChild(wrapper);
			wrapper.classList.add("char-wrapper");

			charList.characters.forEach((character) => {
				if (character.films.length > 0)
					wrapper.appendChild(createCharacterCard(character));
			});
		}
	};

	const showLoader = () => {
		div.innerHTML = `<h2>Searching...</h2><p class="hourglass"></p>`;
	};

	const charList: CharacterList = {
		element: div,
		render: renderCharList,
		showLoader: showLoader,
		characters: [],
	};

	return charList;
};

export default createCharacterList;
