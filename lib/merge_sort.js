function merge(array1, array2) {
		
	let newArray = [];
	while (array1.length && array2.length) {
		
		if (array1[0] > array2[0]) {
			newArray.push(array2.shift());
		} else {
			newArray.push(array1.shift());
		}
	}
	
	return newArray.concat(array1).concat(array2);
}

function mergeSort(array) {
  if (array.length === 0) return [];
  if(array.length === 1) return array;

	let midPoint = array.length / 2;
	let right = array.slice(0, midPoint);
	let left = array.slice(midPoint);

	let sortedRight = mergeSort(right);
	let sortedLeft = mergeSort(left);
  return merge(sortedRight, sortedLeft);

}

module.exports = {
    merge,
    mergeSort
};