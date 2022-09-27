import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
    font-family: 'Roboto', sans-serif !important;
    text-decoration: none;
	//VARIABLES
	
		--background-color: #E5E5E5;
		--secundary-background-color: #FFFFFF;
		--border-color-input: #D4D4D4;
		--secundary-background-color-input: #F2F2F2;
		--primary-color: #126BA5;
		--secondary-color: #daff00;
		--primary-text-color: #666666;
		--secundary-text-color: #4D4D4D;
		--selected-button-color: #CFCFCF;
		--text-input-color: #B3B3B3;
		--sucess-color: #8FC549;
}

`;



export default GlobalStyle;
