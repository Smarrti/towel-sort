module.exports = function towelSort (matrix) {
    if (matrix == undefined) {
        matrix = new Array;
    }
	let arr = new Array;
	matrix.map((element, i) => {
		if (i % 2 != 0) {
            element = element.reverse();
        }
        arr.push(element)
    })
    arr = arr.flat(1);
    return arr;
}
