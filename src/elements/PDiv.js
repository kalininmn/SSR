function PDiv({ classes = '', id = '', content = [] }) {
	return `<div class="${classes}" id="${id}">${content.join('')}</div>`;
}

module.exports = PDiv;