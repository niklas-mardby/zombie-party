import createCharacterSearchForm from "./components/CharacterSearchForm/CharacterSearchForm";
import createZombieForm from "./components/ZombieForm/ZombieForm";
import createZombieList from "./components/ZombieList/ZombieList";
import "./style.scss";

const main = document.querySelector("main") as HTMLDivElement;

main.append(createZombieForm());
main.append(createZombieList());

main.append(createCharacterSearchForm());
