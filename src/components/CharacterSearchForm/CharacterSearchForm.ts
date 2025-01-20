import { searchDisneyCharacterByName } from "../../api/disneyAPI";
import "./CharacterSearchForm.scss";

const createCharacterSearchForm = () => {
	const divForm = document.createElement("div");
	divForm.classList.add("CharacterSearchForm");
	divForm.innerHTML = `<h1>Search Disney Character</h1>`;

	const inputField = document.createElement("input");

	const searchButton = document.createElement("button");
	searchButton.textContent = "Search";

	const handleSearchClick = async () => {
		if (inputField.value) {
			const searchWord = inputField.value;
			inputField.value = "";
			inputField.focus();

			const data = await searchDisneyCharacterByName(searchWord);
			console.log(data);
		}
	};

	searchButton.addEventListener("click", handleSearchClick);

	divForm.appendChild(inputField);
	divForm.appendChild(searchButton);

	return divForm;
};

export default createCharacterSearchForm;
