
function longPress(element, time, functionToRun) {
	var longPress;

	var onmousedown = (time) => {
		longPress = setTimeout(functionToRun , time);
	}

	var onmouseup = () => {
		clearTimeout(longPress);
	}

	element.onmousedown = () => (onmousedown(time));
	element.onmouseup = onmouseup;
}

module.exports = longPress;