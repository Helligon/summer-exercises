const cars = ['Saab', 'Volvo', 'BMW'];

console.log(cars);

cars.forEach(function(car) {
	console.log(car);
});

console.log(cars[1]);
console.log(cars.length);

cars.push('Ford');
console.log(cars);

cars.pop();
console.log(cars);

cars[1] = 'Honda';
console.log(cars);
