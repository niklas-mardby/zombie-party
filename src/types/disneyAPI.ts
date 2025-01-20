export type DisneyCharacter = {
	_id: number;
	films: string[];
	shortFilms: string[];
	tvShows: string[];
	videoGames: string[];
	parkAttractions: string[];
	allies: string[];
	enemies: string[];
	sourceUrl: string;
	name: string;
	imageUrl: string;
	createdAt: string;
	updatedAt: string;
	url: string;
	__v: number;
};

export type APIAnswerInfo = {
	count: number;
	totalPages: number;
	previousPage: null | string;
	nextPage: null | string;
};

export type APIAnswer = {
	info: APIAnswerInfo;
	data: DisneyCharacter[];
};
