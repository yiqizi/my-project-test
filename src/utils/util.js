/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
export function find(list, f) {
	return list.filter(f)[0];
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export function deepCopy(obj, cache = []) {
	// just return if obj is immutable value
	if (obj === null || typeof obj !== "object") {
		return obj;
	}

	// if obj is hit, it is in circular structure
	const hit = find(cache, c => c.original === obj);
	if (hit) {
		return hit.copy;
	}

	const copy = Array.isArray(obj) ? [] : {};
	// put the copy into cache at first
	// because we want to refer it in recursive deepCopy
	cache.push({
		original: obj,
		copy
	});

	Object.keys(obj).forEach(key => {
		copy[key] = deepCopy(obj[key], cache);
	});

	return copy;
}

/**
 * forEach for object
 */
export function forEachValue(obj, fn) {
	Object.keys(obj).forEach(key => fn(obj[key], key));
}

export function isObject(obj) {
	return obj !== null && typeof obj === "object";
}

export function isPromise(val) {
	return val && typeof val.then === "function";
}

export function assert(condition, msg) {
	if (!condition) throw new Error(`[vuex] ${msg}`);
}

export function partial(fn, arg) {
	return function() {
		return fn(arg);
	};
}

export const getBaseURL = () => {
	var baseURL = "";
	var baseDocument = "index.html";

	if (document.getElementsByTagName("base").length > 0) {
		baseURL = document
			.getElementsByTagName("base")[0]
			.href.replace(baseDocument, "");
	} else {
		baseURL =
			location.protocol +
			"//" +
			location.hostname +
			(location.port && ":" + location.port) +
			"/";
	}

	return baseURL;
};

export const toDecimal = x => {
	var f = parseFloat(x);
	if (isNaN(f)) {
		return false;
	}
	var f = Math.round(x * 100) / 100;
	var s = f.toString();
	var rs = s.indexOf(".");
	if (rs < 0) {
		rs = s.length;
		s += ".";
	}
	while (s.length <= rs + 2) {
		s += "0";
	}
	return s;
};

export const keepTwoDecimalFull = num => {
	var result = parseFloat(num);
	if (isNaN(result)) {
		alert("传递参数错误，请检查！");
		return false;
	}
	result = Math.round(num * 100) / 100;
	var s_x = result.toString();
	var pos_decimal = s_x.indexOf(".");
	if (pos_decimal < 0) {
		pos_decimal = s_x.length;
		s_x += ".";
	}
	while (s_x.length <= pos_decimal + 2) {
		s_x += "0";
	}
	return s_x;
};
