// SISM'S AIT CHARGE TT.
// SOLUTION (JAVASCRIPT)

openers = ['(', '[', '{'];
closers = [')', ']', '}'];

phrase = process.argv[2].split('');

if(phrase.length === 0) {
	console.log("NO BLOCK PASSED. WRONG SEQUENCE!");
} else if(phrase.length % 2 !== 0) {
	console.log("NOT PAIRS. WRONG SEQUENCE!");
} else if(closers.includes(phrase[0])) {
	console.log("INIT WITH CLOSER. WRONG SEQUENCE!");
} else if(openers.includes(phrase[phrase.length - 1])) {
	console.log("CLOSE WITH OPENER. WRONG SEQUENCE!");
} else {
	validator = [];
	phrase.forEach(elem => {
		if(openers.includes(elem)) {
			validator.splice(validator.length, 0, elem);
		} else if(closers.includes(elem)) {
			if(closers.indexOf(elem) == openers.indexOf(validator[validator.length-1])) {
				validator.pop();
			};
		};
	});

	if(validator.length === 0) {
		console.log("PERFECT. VALID SEQUENCE!");
	} else {
		console.log("NOT MATCH. WRONG SEQUENCE!");
	};
};
