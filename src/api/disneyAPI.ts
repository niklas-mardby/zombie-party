import { APIAnswer, DisneyCharacter } from "../types/disneyAPI";

export const searchDisneyCharacterByName = async (
	name: string
): Promise<DisneyCharacter[]> => {
	const response = await fetch(
		`https://api.disneyapi.dev/character?name=${name}`
	);
	const data = (await response.json()) as APIAnswer;

	if (Array.isArray(data.data)) return data.data;
	else return [data.data];
};
