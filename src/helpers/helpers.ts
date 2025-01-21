// generiska funktioner som har med detta projekt att göra

export const createDiv = (css: string) => {
	const div = document.createElement("div");
	if (css) div.classList.add(css);
	return div;
};
