function distinctArray(array) {
	let resultArray = [];

	for (let i = 0; i < array.length; i++) {
		if (!resultArray.includes(array[i])) {
			resultArray.push(array[i]);
		}
	}
	console.log(resultArray.join(" "));
}