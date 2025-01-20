import { searchDisneyCharacterByName } from "../../api/disneyAPI";
import createCharacterList from "../CharacterList/CharacterList";
import "./CharacterSearchForm.scss";

const createCharacterSearchForm = () => {
	const divForm = document.createElement("div");
	divForm.classList.add("CharacterSearchForm");
	divForm.innerHTML = `<h1>Search Disney Character</h1>`;

	const inputField = document.createElement("input");

	const searchButton = document.createElement("button");
	searchButton.textContent = "Search";

	const characterList = createCharacterList();

	const handleSearchClick = async () => {
		if (inputField.value) {
			characterList.showLoader();

			const searchWord = inputField.value;
			inputField.value = "";
			inputField.focus();

			const data = await searchDisneyCharacterByName(searchWord);
			console.log(data);

			characterList.characters = data;
			characterList.render();
		}
	};

	searchButton.addEventListener("click", handleSearchClick);

	divForm.appendChild(inputField);
	divForm.appendChild(searchButton);
	divForm.appendChild(characterList.element);

	return divForm;
};

export default createCharacterSearchForm;
