const PHeader = require('../components/PHeader');

class Page {
	content = '';

	get content() {
		return this.content;
	}

	constructor({ title = '', head = [], content = [] }) {
		this.content = `
		<!DOCTYPE html>
		<html lang="ru">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>${title}</title>
			${head.join('\n')}
		</head>
		<body>
			${PHeader()}
			<div class="main">
				<div class="main__wrapper">
					${content.join('')}
				</div>
			</div>
		</body>
		</html>
		`;
	}
}

module.exports = Page;