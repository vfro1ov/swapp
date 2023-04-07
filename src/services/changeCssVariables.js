export const changeCssVariables = theme => {
	const root = document.querySelector(':root')
	console.log(root.style,theme)
	root.style.setProperty('--background-default-img',`var(--background-${theme}-img)`); 
	// root.style.setProperty(`$body-color`,`$body-color${theme}`,'important') 
}