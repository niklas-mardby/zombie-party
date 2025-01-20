import { DisneyCharacter } from "../../types/disneyAPI";
import "./CharacterCard.scss";

const createCharacterCard = (character: DisneyCharacter) => {
	const div = document.createElement("div");
	div.classList.add("CharacterCard");

	div.innerHTML = `
        <p>${character.name}</p>
        <img src="${character.imageUrl}">
    `;
	return div;
};

export default createCharacterCard;
