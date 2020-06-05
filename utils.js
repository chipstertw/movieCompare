const debounce = (func, delay = 1000) => {
	let timeoutId;
	return (...args) => {
		//allow us to pass in multiple args
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			func.apply(null, args);
			// take the function as we normally would and take all the arguments
		}, delay);
	};
};
