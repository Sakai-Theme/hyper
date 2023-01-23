'use strict';

const backgroundColor = '#191724';
const foregroundColor = '#E1E1E6';
const borderColor = '#302C47';
const cursorColor = '#f8f8f2';
const colors = {
  black: '#000000',
  red: '#ff5555',
  green: '#9ccfd8',
  yellow: '#31748f',
  blue: '#bd93f9',
  magenta: '#ff79c6',
  cyan: '#c4a7e7',
  white: '#bfbfbf',
  lightBlack: '#4d4d4d',
  lightRed: '#ff6e67',
  lightGreen: '#9ccfd8',
  lightYellow: '#31748f',
  lightBlue: '#caa9fa',
  lightMagenta: '#ff92d0',
  lightCyan: '#c4a7e7',
  lightWhite: '#e6e6e6',
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
			${config.css || ''}
			.tabs_list .tab_tab.tab_active .tab_text  {
				background: ${backgroundColor};
			}

			.tab_active:before {
				border-color: ${borderColor};
			}
		`,
  });
};
