// Generator Example
function* sayNames() {
	yield 'Jack';
	yield 'Jill';
	yield 'John';
}

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

// ID creator
function* createIds() {
	let index = 0;

	while(true) {
		yield index++;
	}
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);