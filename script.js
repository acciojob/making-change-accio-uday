function makeChange(amount) {
	const change = {};

	// Quarters
	change.q = Math.floor(amount / 25);
	amount %= 25;

	// Dime
	change.d = Math.floor(amount / 10);
	amount %= 10;

	// Nickel
	change.n = Math.floor(amount / 5);
	amount %= 5;

	// Penny
	change.p = Math.floor(amount / 1);
	amount %= 1;

	return change;
}
// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
