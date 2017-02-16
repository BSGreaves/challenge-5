var limit = 500;
let a = 0;
let b = 1;
let c = 0;
while ((a + b) < limit){
	c = a + b;
	console.log(c);
	a = b;
	b = c;
};