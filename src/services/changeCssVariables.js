export const changeCssVariables = (theme) => {
	const root = document.querySelector(':root');
	console.log(root.style, theme);

	const CssVariables = ['header', 'bgimg'];
	CssVariables.forEach(element => {
		root.style.setProperty(`--theme-default-${element}`, `var(--theme-${theme}-${element})`);
	});
};
